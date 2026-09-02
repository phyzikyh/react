import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as Babel from "@babel/standalone";

const baseStyle = `
  * { box-sizing: border-box; }
  body { margin: 0; padding: 18px; color: #1f2937; background: #fff; font: 15px/1.55 system-ui, sans-serif; }
  h1, h2, h3, p { margin-top: 0; }
  img, video { max-width: 100%; height: auto; }
  a { color: #2563eb; }
  button, input, select, textarea { font: inherit; }
  .preview-fixture { max-width: 760px; margin: auto; }
  .preview-fixture header, .preview-fixture nav, .preview-fixture main, .preview-fixture section,
  .preview-fixture article, .preview-fixture footer { padding: 10px; margin: 6px 0; }
  .preview-fixture nav a { margin-right: 12px; }
  .preview-fixture .cards { display: flex; gap: 12px; flex-wrap: wrap; }
  .preview-fixture .card { min-width: 150px; padding: 12px; border: 1px solid #d0d7de; }
  .runtime-error { margin: 0; padding: 14px; color: #9a3412; background: #fff7ed; border-left: 4px solid #ea580c; white-space: pre-wrap; }
`;

const fixture = `
  <div class="preview-fixture">
    <header><h1 id="top">개발자 포트폴리오</h1><p class="intro">웹 인터페이스를 만드는 학생 개발자입니다.</p></header>
    <nav><a href="#projects">프로젝트</a><a href="#contact">연락처</a></nav>
    <main>
      <section><h2>기술</h2><ul><li>HTML</li><li>CSS</li><li>React</li></ul></section>
      <section id="projects" class="cards"><article class="card"><h2>프로젝트 A</h2><p>첫 번째 프로젝트 설명</p><button>자세히 보기</button></article><article class="card"><h2>프로젝트 B</h2><p>두 번째 프로젝트 설명</p></article></section>
      <form id="contact"><label>이메일 <input type="email" placeholder="name@example.com"></label> <button type="submit">보내기</button></form>
      <table><thead><tr><th>항목</th><th>상태</th></tr></thead><tbody><tr><td>포트폴리오</td><td>진행 중</td></tr></tbody></table>
    </main><footer><small>© 2026 학생 개발자</small></footer>
  </div>`;

function makeFrame(label) {
  const panel = document.createElement("section");
  panel.className = "code-result";
  const frame = document.createElement("iframe");
  frame.className = "code-result__frame";
  frame.title = `${label} 코드 실행 결과`;
  frame.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms allow-modals");
  frame.addEventListener("load", () => {
    const resize = () => {
      const height = frame.contentDocument?.documentElement?.scrollHeight;
      if (height) frame.style.height = `${Math.min(Math.max(height + 2, 190), 560)}px`;
    };
    requestAnimationFrame(() => requestAnimationFrame(resize));
    setTimeout(resize, 120);
  });
  panel.append(frame);
  return { panel, frame };
}

function htmlDocument(body, extraStyle = "") {
  return `<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><style>${baseStyle}${extraStyle}</style></head><body>${body}</body></html>`;
}

function showError(panel, frame, error) {
  panel.classList.add("code-result--error");
  frame.srcdoc = htmlDocument(`<pre class="runtime-error">${escapeHtml(error instanceof Error ? error.message : String(error))}</pre>`);
}

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function cleanJsx(source) {
  return source
    .replace(/^\s*import[\s\S]*?;\s*$/gm, "")
    .replace(/export\s+default\s+/g, "")
    .replace(/export\s+(?=(?:function|const|let|class)\s)/g, "");
}

function chooseComponent(source) {
  const names = [...source.matchAll(/function\s+([A-Z][\w]*)\s*\(/g)].map((match) => match[1]);
  if (names.includes("App")) return "App";
  return names.at(-1) || null;
}

function isExpressionOnly(source) {
  const value = source.trim();
  return value.startsWith("<") && !/^(?:<!)|(?:<html\b)/i.test(value);
}

function isRunnableHtml(source) {
  const withoutComments = source.replace(/<!--[\s\S]*?-->/g, "").trim();
  if (!withoutComments) return false;
  return /<(?:body|h[1-6]|p|a|ul|ol|dl|table|img|audio|video|div|span|iframe|form|label|input|select|textarea|button|fieldset|output|section|article|header|main|footer|nav|aside|figure|pre|hr)\b/i.test(withoutComments);
}

function isRunnableJsx(source) {
  if (/잘못(?:된|됨|한)?\s*(?:예|코드)|오류|\.\.\./.test(source)) return false;
  if (/^\s*import\s+.+from\s+["']\.\//m.test(source)) return false;
  return isExpressionOnly(source) || Boolean(chooseComponent(cleanJsx(source)));
}

function previousHtmlSource(scaffold) {
  let sibling = scaffold.previousElementSibling;
  while (sibling) {
    if (/^H[1-6]$/.test(sibling.tagName)) break;
    const htmlCode = sibling.matches?.("pre")
      ? sibling.querySelector("code.sourceCode.html")
      : sibling.querySelector?.("code.sourceCode.html");
    if (htmlCode && isRunnableHtml(htmlCode.textContent)) return htmlCode.textContent;
    sibling = sibling.previousElementSibling;
  }
  return null;
}

function runJsx(frame, panel, source) {
  frame.srcdoc = htmlDocument('<div id="root"></div>');
  frame.addEventListener("load", () => {
    try {
      const doc = frame.contentDocument;
      let code = cleanJsx(source);
      let componentName = chooseComponent(code);
      if (isExpressionOnly(code)) {
        code = `function Demo(){ return (${code}); }`;
        componentName = "Demo";
      }
      let captured = null;
      const captureRoot = () => ({ render(element) { captured = element; } });
      const hookPrelude = `const { Fragment, useState, useEffect, useRef, useMemo, useCallback, useReducer, useContext, useId } = React;\n`;
      const transformed = Babel.transform(hookPrelude + code, { presets: [["react", { runtime: "classic" }]], filename: "example.jsx" }).code;
      const result = Function("React", "StrictMode", "createRoot", "document", `${transformed}\nreturn typeof ${componentName || "undefined"} !== "undefined" ? ${componentName || "undefined"} : null;`)(React, StrictMode, captureRoot, doc);
      const element = captured || (result ? React.createElement(result) : null);
      if (!element) throw new Error("이 코드는 독립 화면이 아니라 다른 파일과 함께 사용하는 코드 조각입니다.");
      createRoot(doc.getElementById("root")).render(element);
    } catch (error) {
      showError(panel, frame, error);
    }
  }, { once: true });
}

function enhanceCodeBlocks() {
  const blocks = document.querySelectorAll("pre > code.sourceCode");
  blocks.forEach((code) => {
    const classes = [...code.classList];
    const language = classes.find((name) => ["html", "css", "jsx", "javascriptreact", "js", "javascript"].includes(name));
    if (!language) return;
    const scaffold = code.closest(".code-copy-outer-scaffold") || code.closest("div.sourceCode") || code.parentElement;
    if (!scaffold || scaffold.nextElementSibling?.classList.contains("code-result")) return;
    const source = code.textContent;
    let cssHtml = null;
    if (language === "html" && !isRunnableHtml(source)) return;
    if (language === "css") {
      cssHtml = previousHtmlSource(scaffold);
      if (!cssHtml) return;
    }
    if (["jsx", "javascriptreact", "js", "javascript"].includes(language) && !isRunnableJsx(source)) return;
    const label = language === "javascriptreact" ? "JSX" : language.toUpperCase();
    const { panel, frame } = makeFrame(label);
    scaffold.insertAdjacentElement("afterend", panel);
    if (language === "html") frame.srcdoc = htmlDocument(source);
    else if (language === "css") frame.srcdoc = htmlDocument(cssHtml, source);
    else runJsx(frame, panel, source);
  });
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", enhanceCodeBlocks);
else enhanceCodeBlocks();
