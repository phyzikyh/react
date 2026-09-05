import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const projects = [
  { id: "learning-log", title: "학습 기록 서비스", description: "날짜별 학습 내용과 진행 상황을 기록합니다.", status: "complete", technologies: ["React", "CSS"], featured: true },
  { id: "portfolio", title: "개발자 포트폴리오", description: "프로젝트와 기술을 소개하는 반응형 웹사이트입니다.", status: "progress", technologies: ["React", "HTML"], featured: true },
  { id: "weather", title: "날씨 대시보드", description: "지역별 날씨 정보를 카드로 비교합니다.", status: "progress", technologies: ["JavaScript", "CSS"], featured: false },
  { id: "a11y-check", title: "접근성 점검 도구", description: "페이지의 주요 접근성 항목을 확인합니다.", status: "complete", technologies: ["React", "HTML"], featured: false }
];

function ProjectCard({ project }) {
  return <article className="card">{project.featured && <span className="featured">추천</span>}<div className="status">{project.status === "complete" ? "완료" : "진행 중"}</div><h2>{project.title}</h2><p>{project.description}</p><ul>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></article>;
}

function App() {
  const [query, setQuery] = useState("");
  const [technology, setTechnology] = useState("all");
  const [completeOnly, setCompleteOnly] = useState(false);
  const visibleProjects = projects.filter((project) => {
    const matchesQuery = project.title.toLowerCase().includes(query.toLowerCase());
    const matchesTechnology = technology === "all" || project.technologies.includes(technology);
    const matchesStatus = !completeOnly || project.status === "complete";
    return matchesQuery && matchesTechnology && matchesStatus;
  });
  return <main className="shell"><header><p>REACT PORTFOLIO · WEEK 07</p><h1>프로젝트 탐색</h1><strong>{visibleProjects.length}개 결과</strong></header><section className="filters" aria-label="프로젝트 필터"><label>검색<input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="프로젝트 이름"/></label><label>기술<select value={technology} onChange={(e) => setTechnology(e.target.value)}><option value="all">전체</option><option value="React">React</option><option value="HTML">HTML</option><option value="CSS">CSS</option><option value="JavaScript">JavaScript</option></select></label><label className="check"><input type="checkbox" checked={completeOnly} onChange={(e) => setCompleteOnly(e.target.checked)}/>완료 프로젝트만</label></section><p className="result-status" role="status">검색 결과 {visibleProjects.length}개</p>{visibleProjects.length > 0 ? <section className="grid">{visibleProjects.map((project) => <ProjectCard key={project.id} project={project}/>)}</section> : <section className="empty"><h2>조건에 맞는 프로젝트가 없습니다</h2><p>검색어 또는 필터를 변경해 보세요.</p></section>}</main>;
}

createRoot(document.getElementById("root")).render(<StrictMode><App /></StrictMode>);
