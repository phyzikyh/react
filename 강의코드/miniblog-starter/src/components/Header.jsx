import Clock from "./Clock";

// 10주차: 부모(App)가 계산한 likedCount 를 props 로 받아 보여 줍니다.
function Header({ title, subtitle = "", likedCount = 0 }) {
  return (
    <header className="header">
      <div>
        <h1>{title}</h1>
        {subtitle && <p className="header__sub">{subtitle}</p>}
      </div>
      <div className="header__right">
        <span className="liked-count">♥ 내가 좋아한 글 {likedCount}</span>
        <Clock />
      </div>
    </header>
  );
}

export default Header;
