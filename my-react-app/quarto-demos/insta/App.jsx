import { useState } from "react";
import "./App.css";

function PostCard({ username, image, initialLikes, caption }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [comment, setComment] = useState("");
  const [saved, setSaved] = useState(false);
  const [following, setFollowing] = useState(false);
  const [open, setOpen] = useState(false);

  function toggleLike() {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  }

  return (
    <article className="post">
      <header className="post__head">
        <span className="post__user">{username}</span>
        <button className="post__follow" onClick={() => setFollowing(!following)}>
          {following ? "팔로잉" : "팔로우"}
        </button>
      </header>

      <img className="post__image" src={image} alt={`${username}의 게시물`} />

      <div className="post__actions">
        <button onClick={toggleLike}>{liked ? "♥" : "♡"}</button>
        <button className="post__save" onClick={() => setSaved(!saved)}>
          {saved ? "저장됨" : "저장"}
        </button>
      </div>

      <p className="post__likes">좋아요 {likes.toLocaleString()}개</p>
      <p className="post__caption"><b>{username}</b> {caption}</p>

      <button className="post__more" onClick={() => setOpen(!open)}>
        {open ? "접기" : "더 보기"}
      </button>
      {open && (
        <p className="post__detail">
          오늘은 useState로 좋아요와 댓글 기능을 직접 구현해 봤습니다. 생각보다 간단해서 놀랐어요.
        </p>
      )}

      <input
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        placeholder="댓글 달기..."
      />
      {comment && <p className="post__preview">작성 중: {comment}</p>}
      {comment && <p className="post__count">{comment.length}자</p>}
    </article>
  );
}

function App() {
  return (
    <div className="feed">
      <PostCard
        username="minjun_dev"
        image="https://picsum.photos/seed/react1/470/470"
        initialLikes={1284}
        caption="React State 배우는 중"
      />
      <PostCard
        username="coding_kim"
        image="https://picsum.photos/seed/react2/470/470"
        initialLikes={356}
        caption="좋아요가 진짜 눌린다"
      />
    </div>
  );
}

export default App;
