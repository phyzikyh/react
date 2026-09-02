import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function StatusBadge({ label, tone = "neutral" }) {
  return <span className={`badge badge--${tone}`}>{label}</span>;
}

function ProjectCard({ title, status, tone, description }) {
  return (
    <article className="card">
      <StatusBadge label={status} tone={tone} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href="#result">프로젝트 자세히 보기</a>
    </article>
  );
}

function App() {
  return (
    <main id="result">
      <header>
        <p>Reusable UI</p>
        <h1>같은 컴포넌트, 다른 Props</h1>
        <p>카드 구조는 같지만 전달된 데이터에 따라 결과가 달라집니다.</p>
      </header>
      <section className="grid" aria-label="프로젝트 목록">
        <ProjectCard
          title="개인 포트폴리오"
          status="완료"
          tone="success"
          description="HTML과 CSS로 만든 반응형 개발 포트폴리오입니다."
        />
        <ProjectCard
          title="학습 기록 서비스"
          status="개발 중"
          tone="progress"
          description="React 컴포넌트와 Props를 적용하고 있습니다."
        />
        <ProjectCard
          title="새 학기 프로젝트"
          status="기획 중"
          description="해결할 문제와 핵심 사용자를 조사하고 있습니다."
        />
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode><App /></StrictMode>
);

