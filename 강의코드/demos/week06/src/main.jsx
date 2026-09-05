import { StrictMode, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function useDocumentTitle(title) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    return () => { document.title = previousTitle; };
  }, [title]);
}

function Clock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const timerId = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);
  return <time dateTime={now.toISOString()}>{now.toLocaleTimeString("ko-KR")}</time>;
}

function App() {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState("light");
  const searchRef = useRef(null);
  useDocumentTitle(query ? `${query} 검색 · 포트폴리오` : "홍길동 포트폴리오");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    return () => { delete document.documentElement.dataset.theme; };
  }, [theme]);

  return (
    <main className="shell">
      <header>
        <div><p className="eyebrow">REACT HOOKS · WEEK 06</p><h1>Hook으로 브라우저와 연결하기</h1></div>
        <Clock />
      </header>
      <section className="toolbar">
        <label htmlFor="search">프로젝트 검색</label>
        <div><input ref={searchRef} id="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="예: React"/><button type="button" onClick={() => searchRef.current?.focus()}>검색창 포커스</button></div>
        <p>검색어에 따라 브라우저 탭 제목도 바뀝니다.</p>
      </section>
      <section className="card">
        <h2>화면 테마</h2>
        <p>Effect가 React State와 브라우저 문서 속성을 동기화합니다.</p>
        <button type="button" onClick={() => setTheme((value) => value === "light" ? "dark" : "light")}>{theme === "light" ? "어둡게" : "밝게"}</button>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<StrictMode><App /></StrictMode>);
