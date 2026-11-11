import { useState } from "react";

// TODO 2-1: props 로 받은 post 객체를 구조 분해하세요.
//   필요한 값: id, title, author, date, category, content, likes, liked, isNew
function PostCard({ post, onToggleLike, onDelete }) {
  // TODO 4-1: "더 보기" 펼침 여부를 저장할 state 를 만드세요. (처음 값: false)

  return (
    <article className="post">
      {/* TODO 2-2: 제목, 작성자 · 날짜 · 카테고리, 본문을 보여 주세요. */}
      <h2>TODO</h2>

      {/* TODO 3-1: isNew 가 true 일 때만 <span className="badge-new">NEW</span> 를 제목 옆에 보여 주세요. */}

      {/* TODO 4-2: 본문이 50자보다 길면 앞 50자 + "…" 만 보여 주고, "더 보기/접기" 버튼으로 전환하세요. */}

      <div className="post__actions">
        {/* TODO 5-2: 좋아요 버튼 - 클릭하면 onToggleLike(id) 를 호출하세요.
            liked 이면 className="btn-like btn-like--on" 과 ♥, 아니면 "btn-like" 와 ♡ */}

        {/* TODO 10-3: 삭제 버튼 - 클릭하면 onDelete(id) 를 호출하세요. className="btn-delete" */}
      </div>
    </article>
  );
}

export default PostCard;
