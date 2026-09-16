function App() {
  const price = 15000;
  const discount = 1500;

  return (
    <section>
      <h2>도서 가격</h2>
      <p>정가: {price}원</p>
      <p>할인 금액: {discount}원</p>
      <p>판매가: {price - discount}원</p>
    </section>
  );
}

export default App;
