import "./style.css";

function SearchBar() {
  return <div className="search"><label htmlFor="search">⌕</label><input id="search" placeholder="어떤 물건을 찾고 있나요?" /></div>;
}
function Header() {
  return <header><a className="logo" href="#home">campus<span>market.</span></a><nav><a className="current" href="#products">중고거래</a><a href="#guide">이용 안내</a></nav><SearchBar /><a className="profile-link" href="#seller">내 프로필 <span>J</span></a></header>;
}
function ProductCard({ title, price, location, image, category }) {
  return <article className="product"><div className="product-image"><img src={image} alt={title} /><span>{category}</span></div><div className="product-body"><h3>{title}</h3><strong>{price.toLocaleString("ko-KR")}<small>원</small></strong><p>⌖ {location}</p></div></article>;
}
function SellerProfile({ name, description, size = 48 }) {
  return <div className="seller"><span className="avatar" style={{width:size,height:size}}>J</span><div><strong>{name}</strong><p>{description}</p></div></div>;
}
function NoticeBox({ title, children }) {
  return <section className="notice"><h3>{title}</h3>{children}</section>;
}
function Footer() {
  return <footer><a className="logo" href="#home">campus<span>market.</span></a><p>물건은 가볍게, 캠퍼스는 가깝게.</p><small>© 2026 Campus Market</small></footer>;
}
function App() {
  return <>
    <Header />
    <main id="home">
      <section className="hero"><div><span className="eyebrow">우리 학교, 우리 동네</span><h1>필요한 물건은 가까이.<br/>좋은 거래는 가볍게.</h1><p>다 읽은 전공책부터 아끼던 키보드까지.<br/>캠퍼스 이웃과 물건의 다음 이야기를 이어가세요.</p><a className="primary" href="#products">지금 올라온 물건 보기 <span>↗</span></a></div><div className="hero-art"><div className="orbit"></div><img src="./desk.svg" alt="책과 헤드폰이 놓인 책상" /><span className="sticker">다음 주인을<br/>기다리는 중!</span><span className="hero-tag">A LITTLE LESS NEW. A LOT MORE YOU.</span></div></section>
      <div className="content-layout">
        <section id="products" className="products"><div className="section-heading"><div><span className="eyebrow">FRESH FINDS</span><h2>캠퍼스에 방금 올라왔어요</h2></div><span className="count">추천 상품 6개</span></div><div className="categories"><span className="active">전체</span><span>디지털 기기</span><span>전공 서적</span><span>생활용품</span></div><div className="grid">
          <ProductCard title="무선 기계식 키보드" price={35000} location="학생회관 · 10분 전" image="./keyboard.svg" category="디지털 기기" />
          <ProductCard title="자료구조 전공책" price={18000} location="중앙도서관 · 25분 전" image="./books.svg" category="전공 서적" />
          <ProductCard title="노이즈 캔슬링 헤드폰" price={65000} location="공학관 · 40분 전" image="./headphones.svg" category="디지털 기기" />
          <ProductCard title="각도 조절 데스크 조명" price={12000} location="기숙사 앞 · 1시간 전" image="./lamp.svg" category="생활용품" />
          <ProductCard title="가볍게 들고 다니는 백팩" price={22000} location="정문 · 2시간 전" image="./bag.svg" category="생활용품" />
          <ProductCard title="스테인리스 텀블러" price={8000} location="학생회관 · 3시간 전" image="./cup.svg" category="생활용품" />
        </div></section>
        <aside><section className="profile-box" id="seller"><span className="eyebrow">MY CAMPUS</span><h2>반가워요, 지민님!</h2><SellerProfile name="김지민" description="컴퓨터공학과 · 캠퍼스 이웃" /><div className="profile-stats"><span>판매 중<strong>3</strong></span><span>거래 완료<strong>12</strong></span></div></section><div id="guide"><NoticeBox title="가까운 곳에서, 안심 거래"><p>사람이 많은 교내 장소에서 만나 물건의 상태를 직접 확인하세요.</p><a href="#places">추천 거래 장소 ↗</a></NoticeBox><NoticeBox title="물건에도 두 번째 학기를"><p>사용하지 않는 물건이 누군가에게 꼭 필요한 시작이 될 수 있어요.</p><span className="green-label">REUSE · CONNECT · CAMPUS</span></NoticeBox></div><section className="places" id="places"><h3>만나기 좋은 곳</h3><p>01 <strong>학생회관 1층 로비</strong></p><p>02 <strong>중앙도서관 정문</strong></p><p>03 <strong>기숙사 편의점 앞</strong></p></section></aside>
      </div>
    </main><Footer />
  </>;
}
export default App;

