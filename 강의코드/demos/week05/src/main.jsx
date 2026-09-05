import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function ProjectCard({ title, description }) {
  const [likes, setLikes] = useState(0);
  return (
    <article className="project-card">
      <p className="eyebrow">FEATURED PROJECT</p>
      <h2>{title}</h2>
      <p>{description}</p>
      <button type="button" onClick={() => setLikes((count) => count + 1)}>
        좋아요 <span aria-live="polite">{likes}</span>
      </button>
    </article>
  );
}

function App() {
  const [isBioOpen, setIsBioOpen] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`${email || "입력 없음"} 주소로 연락 요청을 저장했습니다.`);
  }

  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">REACT PORTFOLIO · WEEK 05</p>
        <h1>사용자 행동에 반응하는 포트폴리오</h1>
        <button type="button" aria-expanded={isBioOpen} onClick={() => setIsBioOpen((open) => !open)}>
          {isBioOpen ? "소개 닫기" : "소개 더 보기"}
        </button>
        {isBioOpen && <p className="bio">State를 사용하면 같은 컴포넌트가 사용자 행동에 따라 다른 화면을 보여줄 수 있습니다.</p>}
      </section>
      <ProjectCard title="학습 기록 서비스" description="학습 내용과 프로젝트 진행 상태를 기록합니다." />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">연락받을 이메일</label>
        <input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="student@example.com" />
        <p aria-live="polite">현재 입력: {email || "아직 입력하지 않음"}</p>
        <button type="submit">연락 요청</button>
      </form>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<StrictMode><App /></StrictMode>);
