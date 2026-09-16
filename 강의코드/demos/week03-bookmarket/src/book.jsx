function App() {
  const title = "Alice's Adventures in Wonderland";
  const author = "Lewis Carroll";
  const cover = "./book-alice.svg";

  return (
    <article className="book">
      <img className="book-cover" src={cover} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>저자: {author}</p>
      </div>
    </article>
  );
}

export default App;
