function App() {
  const courseName = "고급웹프로그래밍: React";
  const topic = "JSX";

  return (
    <section>
      <h1>{courseName}</h1>
      <p>이번 학습 주제는 {topic}입니다.</p>
      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
        alt="노트북을 이용하여 웹 개발을 학습하는 모습"
        width={400}
      />
      <p>
        <a href="https://react.dev/learn">React 학습 문서 보기</a>
      </p>
    </section>
  );
}

export default App;
