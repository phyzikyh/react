function App() {
  const order = {
    shop: "CAMPUS STORE",
    number: "ORDER-20260909-001",
    customer: "김리액트",
    date: "2026년 9월 9일",
    shippingFee: 3000,
    discount: 2000,
  };
  const notebook = { name: "스터디 노트", price: 3500, quantity: 2 };
  const pen = { name: "검정 볼펜", price: 1500, quantity: 3 };
  const notebookTotal = notebook.price * notebook.quantity;
  const penTotal = pen.price * pen.quantity;
  const subtotal = notebookTotal + penTotal;
  const total = subtotal + order.shippingFee - order.discount;

  return (
    <>
      <header className="page-header">
        <p>{order.shop}</p>
        <h1>주문 내역 · 영수증</h1>
        <p>JSX로 주문 데이터와 계산 결과를 표시합니다.</p>
      </header>
      <main className="sheet">
        <section>
          <h2>주문 정보</h2>
          <dl>
            <div><dt>주문 번호</dt><dd>{order.number}</dd></div>
            <div><dt>주문자</dt><dd>{order.customer}</dd></div>
            <div><dt>주문일</dt><dd>{order.date}</dd></div>
          </dl>
        </section>
        <section>
          <h2>주문 상품</h2>
          <table>
            <caption>상품별 단가, 수량과 금액</caption>
            <thead>
              <tr><th scope="col">상품</th><th scope="col">단가</th><th scope="col">수량</th><th scope="col">금액</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">{notebook.name}</th><td>{notebook.price}원</td><td>{notebook.quantity}개</td><td>{notebookTotal}원</td></tr>
              <tr><th scope="row">{pen.name}</th><td>{pen.price}원</td><td>{pen.quantity}개</td><td>{penTotal}원</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h2>결제 금액</h2>
          <dl>
            <div><dt>상품 합계</dt><dd>{subtotal}원</dd></div>
            <div><dt>배송비</dt><dd>{order.shippingFee}원</dd></div>
            <div><dt>할인 금액</dt><dd>{order.discount}원</dd></div>
            <div className="total"><dt>최종 금액</dt><dd>{total}원</dd></div>
          </dl>
        </section>
      </main>
      <footer>학습용 주문 데이터입니다.</footer>
    </>
  );
}

export default App;

