// 화면에 표시할 값은 JavaScript로 준비하고, JSX의 중괄호로 사용합니다.
const club = {
  name: "CodeMate",
  slogan: "함께 만들고 함께 성장하는 대학 개발 동아리",
  intro:
    "CodeMate는 웹과 앱을 직접 만들어 보며 실력을 키우는 동아리입니다. 매주 스터디로 기초를 다지고, 학기마다 팀을 이루어 실제 서비스를 완성합니다.",
  foundedYear: 2019,
  memberCount: 48,
  projectCount: 27,
};

// 카드 하나하나의 내용도 값으로 준비합니다.
const study = {
  title: "주간 스터디",
  desc: "매주 한 가지 주제를 함께 학습하고 코드 리뷰를 진행합니다.",
  tag: "매주 화요일",
};
const project = {
  title: "팀 프로젝트",
  desc: "학기마다 3~4인 팀을 구성해 기획부터 배포까지 경험합니다.",
  tag: "학기 단위",
};
const hackathon = {
  title: "해커톤",
  desc: "방학마다 무박 2일 해커톤으로 아이디어를 서비스로 만듭니다.",
  tag: "방학 특별활동",
};

const thisYear = 2026;

function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="brand" href="#home">
          &lt;{club.name}/&gt;
        </a>
        <nav className="nav" aria-label="주요 메뉴">
          <a href="#about">소개</a>
          <a href="#activities">활동</a>
          <a href="#recruit">모집</a>
          <a href="#contact">문의</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap">
        <p className="eyebrow">SINCE {club.foundedYear}</p>
        <h1 className="hero-title">{club.slogan}</h1>
        <p className="hero-desc">{club.intro}</p>
        <div className="hero-buttons">
          <a className="btn btn-fill" href="#recruit">
            지원하기
          </a>
          <a className="btn btn-line" href="#activities">
            활동 살펴보기
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <h2 className="section-title" id="about-title">
          소개
        </h2>
        <p className="lead">{club.intro}</p>
        <ul className="stats">
          <li className="stat">
            <strong className="stat-num">{thisYear - club.foundedYear}년</strong>
            <span className="stat-label">활동 연차</span>
          </li>
          <li className="stat">
            <strong className="stat-num">{club.memberCount}명</strong>
            <span className="stat-label">함께하는 회원</span>
          </li>
          <li className="stat">
            <strong className="stat-num">{club.projectCount}개</strong>
            <span className="stat-label">완성한 프로젝트</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Activities() {
  return (
    <section className="section section-alt" id="activities" aria-labelledby="act-title">
      <div className="wrap">
        <h2 className="section-title" id="act-title">
          활동
        </h2>
        <div className="cards">
          <article className="card">
            <span className="card-tag">{study.tag}</span>
            <h3 className="card-title">{study.title}</h3>
            <p className="card-desc">{study.desc}</p>
          </article>
          <article className="card">
            <span className="card-tag">{project.tag}</span>
            <h3 className="card-title">{project.title}</h3>
            <p className="card-desc">{project.desc}</p>
          </article>
          <article className="card">
            <span className="card-tag">{hackathon.tag}</span>
            <h3 className="card-title">{hackathon.title}</h3>
            <p className="card-desc">{hackathon.desc}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Recruit() {
  return (
    <section className="section" id="recruit" aria-labelledby="recruit-title">
      <div className="wrap">
        <h2 className="section-title" id="recruit-title">
          {thisYear}년 신입 회원 모집
        </h2>
        <dl className="info">
          <div className="info-row">
            <dt>모집 대상</dt>
            <dd>프로그래밍에 관심 있는 모든 재학생 (전공 무관)</dd>
          </div>
          <div className="info-row">
            <dt>모집 기간</dt>
            <dd>3월 2일 ~ 3월 15일</dd>
          </div>
          <div className="info-row">
            <dt>지원 방법</dt>
            <dd>아래 문의 양식으로 이름과 이메일을 남겨 주세요.</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section section-alt" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <h2 className="section-title" id="contact-title">
          문의하기
        </h2>
        <p className="lead">궁금한 점이나 지원 의사를 편하게 남겨 주세요.</p>
        <form className="form">
          <div className="field">
            <label htmlFor="name">이름</label>
            <input id="name" type="text" placeholder="홍길동" />
          </div>
          <div className="field">
            <label htmlFor="email">이메일</label>
            <input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="field">
            <label htmlFor="message">메시지</label>
            <textarea id="message" placeholder="하고 싶은 말을 적어 주세요." />
          </div>
          <button className="btn btn-fill" type="button">
            보내기
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <small>
          © {thisYear} {club.name}
        </small>
        <small>GitHub · Instagram · Notion</small>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Activities />
        <Recruit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
