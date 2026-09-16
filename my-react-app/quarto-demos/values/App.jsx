function App() {
  const name = "김유한";
  const completed = 3;
  const total = 7;

  return (
    <article>
      <h2>{name}</h2>
      <p>완료한 과제: {completed}개</p>
      <p>남은 과제: {total - completed}개</p>
    </article>
  );
}

export default App;
