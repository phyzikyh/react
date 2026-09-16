import "./App.css";

function App() {
  const storeName = "BOOKMARKET";
  const title1 = "이상한 나라의 앨리스";
  const author1 = "Lewis Carroll";
  const price1 = 15000;
  const discount1 = 1500;
  const title2 = "허클베리 핀의 모험";
  const author2 = "Mark Twain";
  const price2 = 12000;
  const discount2 = 1200;
  const title3 = "손자병법";
  const author3 = "Sun Tzu";
  const price3 = 18000;
  const discount3 = 1800;
  const title4 = "햄릿";
  const author4 = "William Shakespeare";
  const price4 = 14000;
  const discount4 = 1400;
  const title5 = "플랫랜드";
  const author5 = "Edwin Abbott Abbott";
  const price5 = 16000;
  const discount5 = 1600;

  return (
    <>
      <header className="store-header">
        <div className="header-inner">
          <a className="brand" href="#top">{storeName}</a>
          <div className="search-box">
            <label htmlFor="keyword">도서 검색</label>
            <input id="keyword" type="search" placeholder="어떤 책을 찾고 있나요?" />
          </div>
          <span className="header-note">책과 함께하는 일상</span>
        </div>
        <nav className="store-nav" aria-label="서점 메뉴">
          <a className="selected" href="#books">베스트셀러</a>
          <a href="#book1">문학</a>
          <a href="#book3">인문</a>
          <a href="#book4">희곡</a>
          <a href="#book5">과학</a>
          <a href="#store-info">서점 안내</a>
        </nav>
      </header>

      <main className="store-layout" id="top">
        <aside className="sidebar">
          <h2>도서 카테고리</h2>
          <nav aria-label="도서 분야">
            <a className="active" href="#books">전체 도서 <span>5</span></a>
            <a href="#book1">문학 <span>2</span></a>
            <a href="#book3">인문 <span>1</span></a>
            <a href="#book4">희곡 <span>1</span></a>
            <a href="#book5">과학 <span>1</span></a>
          </nav>
          <p className="sidebar-note">한 권의 책으로<br />넓어지는 나의 세계</p>
        </aside>

        <section className="catalog" id="books">
          <p className="breadcrumb">홈 / 도서 / 베스트셀러</p>
          <div className="catalog-heading">
            <h1>전체 베스트셀러</h1>
            <span>BOOK SELECTION</span>
          </div>
          <div className="list-summary">
            <p>총 <strong>5</strong>권의 도서</p>
            <span>추천 도서</span>
          </div>

          <div className="book-list">
            <article className="book-row" id="book1">
              <span className="rank">1</span>
              <img className="cover" src="./store-book-1.svg" alt={title1} />
              <div className="book-details">
                <span className="category">문학</span>
                <h2>{title1}</h2>
                <p className="author">{author1}</p>
                <p className="description">상상으로 가득한 세계에서 펼쳐지는 앨리스의 모험.</p>
                <p className="price-line">
                  <span className="discount">10%</span>
                  <strong>{price1 - discount1}원</strong>
                  <del>{price1}원</del>
                </p>
                <p className="shipping">무료배송</p>
              </div>
            </article>
            <article className="book-row" id="book2">
              <span className="rank">2</span>
              <img className="cover" src="./store-book-2.svg" alt={title2} />
              <div className="book-details">
                <span className="category">문학</span>
                <h2>{title2}</h2>
                <p className="author">{author2}</p>
                <p className="description">미시시피강을 따라 떠나는 자유와 성장의 이야기.</p>
                <p className="price-line">
                  <span className="discount">10%</span>
                  <strong>{price2 - discount2}원</strong>
                  <del>{price2}원</del>
                </p>
                <p className="shipping">무료배송</p>
              </div>
            </article>
            <article className="book-row" id="book3">
              <span className="rank">3</span>
              <img className="cover" src="./store-book-3.svg" alt={title3} />
              <div className="book-details">
                <span className="category">인문</span>
                <h2>{title3}</h2>
                <p className="author">{author3}</p>
                <p className="description">전략과 판단에 관해 생각하게 하는 고전.</p>
                <p className="price-line">
                  <span className="discount">10%</span>
                  <strong>{price3 - discount3}원</strong>
                  <del>{price3}원</del>
                </p>
                <p className="shipping">무료배송</p>
              </div>
            </article>
            <article className="book-row" id="book4">
              <span className="rank">4</span>
              <img className="cover" src="./store-book-4.svg" alt={title4} />
              <div className="book-details">
                <span className="category">희곡</span>
                <h2>{title4}</h2>
                <p className="author">{author4}</p>
                <p className="description">삶과 선택, 갈등을 담은 셰익스피어의 비극.</p>
                <p className="price-line">
                  <span className="discount">10%</span>
                  <strong>{price4 - discount4}원</strong>
                  <del>{price4}원</del>
                </p>
                <p className="shipping">무료배송</p>
              </div>
            </article>
            <article className="book-row" id="book5">
              <span className="rank">5</span>
              <img className="cover" src="./store-book-5.svg" alt={title5} />
              <div className="book-details">
                <span className="category">과학</span>
                <h2>{title5}</h2>
                <p className="author">{author5}</p>
                <p className="description">차원의 세계를 통해 시야를 넓히는 이야기.</p>
                <p className="price-line">
                  <span className="discount">10%</span>
                  <strong>{price5 - discount5}원</strong>
                  <del>{price5}원</del>
                </p>
                <p className="shipping">무료배송</p>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="store-footer" id="store-info">
        <strong>{storeName}</strong>
        <p>좋은 책을 만나는 곳 · 책과 함께하는 일상</p>
      </footer>
    </>
  );
}

export default App;

