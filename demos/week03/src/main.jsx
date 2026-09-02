import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const developer = {
  name: "홍길동",
  role: "프론트엔드 개발자",
  message: "JSX로 데이터와 UI 구조를 연결합니다.",
};

const project = {
  title: "2026 React 프로젝트",
  status: "JSX 화면 구현 중",
  description: "React가 JSX를 계산하고 실제 DOM에 반영한 결과입니다.",
};

function App() {
  return (
    <>
      <header><strong>{developer.name}.dev</strong></header>
      <main>
        <section className="hero">
          <p>{developer.role}</p>
          <h1>안녕하세요, {developer.name}입니다.</h1>
          <p>{developer.message}</p>
        </section>
        <section aria-labelledby="project-title">
          <h2 id="project-title">프로젝트</h2>
          <article>
            <span>{project.status}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        </section>
      </main>
      <footer>&copy; 2026 {developer.name}</footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode><App /></StrictMode>
);

