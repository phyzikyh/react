import "./App.css";

function Header() {
  return (
    <header className="header">
      <a className="logo" href="#top">◆ K LEAGUE</a>
      <nav>
        <a href="#matches">경기 일정</a>
        <a href="#notice">관람 안내</a>
      </nav>
    </header>
  );
}

function PageTitle({ title, description }) {
  return (
    <section id="top" className="page-title">
      <p>K LEAGUE 2026</p>
      <h1>{title}</h1>
      <span>{description}</span>
    </section>
  );
}

function LeagueTabs() {
  return (
    <div className="league-tabs">
      <button className="active">K리그1</button>
      <button>K리그2</button>
    </div>
  );
}

function MatchRow({ date, home, away, stadium }) {
  return (
    <div className="match-row">
      <time>{date}</time>
      <div className="teams">
        <strong>{home}</strong>
        <span>VS</span>
        <strong>{away}</strong>
      </div>
      <p>{stadium}</p>
    </div>
  );
}

function NoticeBox({ title, children }) {
  return (
    <section id="notice" className="notice">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <strong>K LEAGUE</strong>
      <small>© 2026 K LEAGUE</small>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <PageTitle
        title="경기 일정"
        description="이번 주 주요 경기를 확인하세요."
      />

      <main>
        <LeagueTabs />

        <section id="matches" className="match-list">
          <div className="match-head">
            <span>날짜</span><span>경기</span><span>경기장</span>
          </div>
          <MatchRow date="09.19" home="부천" away="김천" stadium="부천 종합" />
          <MatchRow date="09.20" home="안양" away="울산" stadium="안양 종합" />
          <MatchRow date="09.21" home="인천" away="대전" stadium="인천 전용" />
        </section>

        <NoticeBox title="관람 안내">
          <p>경기 시작 30분 전까지 입장하세요.</p>
          <p>통로와 계단에서는 관람하지 않습니다.</p>
        </NoticeBox>
      </main>
      <Footer />
    </>
  );
}

export default App;
