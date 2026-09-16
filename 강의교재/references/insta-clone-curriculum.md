# 관통 프로젝트 설계: 인스타그램 피드 클론 (3~7주차)

> React 파트의 **실습**을 한 학기 동안 자라는 **하나의 프로젝트**로 통일한다.
> 매주 배우는 개념이 클론에 **새 기능 한 겹**을 얹는다. 이론은 지금의 인터리브(작은 예제)를 유지하고, 실습/챌린지만 이 클론으로 통일한다.

## 설계 원칙

1. **핵심 화면 하나만** — 인스타 "전체"가 아니라 **피드 한 화면**. DM·프로필·탐색은 다루지 않는다.
2. **픽셀 완벽 금지, 동작 우선** — CSS는 알아볼 정도까지만. 시간은 React 로직에.
3. **학습용 클론 명시** — 실제 인스타 로고·상표를 그대로 쓰지 않는다. 이름은 예: `Fastagram` / `학습용 피드`. 이미지는 `https://picsum.photos` 같은 placeholder나 학생 사진.
4. **매주 이전 결과 위에 추가** — 새 프로젝트를 새로 시작하지 않는다. 지난주 코드에 이어 붙인다.

## 최종 완성 화면 (7주차 끝)

```text
┌───────────────────────────────┐
│  Fastagram        ♡  ✈  ＋      │  헤더
├───────────────────────────────┤
│  (◯)(◯)(◯)(◯)(◯) …             │  스토리 바 (가로 스크롤)
├───────────────────────────────┤
│  ◯ minji_dev            ⋯       │  게시물: 유저 헤더
│  ┌───────────────────────────┐ │
│  │         (사진)             │ │  사진
│  └───────────────────────────┘ │
│  ♥  💬  ✈              🔖       │  액션 (좋아요/댓글/공유/저장)
│  좋아요 128개                    │  좋아요 수
│  minji_dev  오늘 React 배움 🔥   │  캡션
│  댓글 3개 모두 보기              │  댓글 목록
│  ─ 댓글 달기…            게시    │  댓글 입력
├───────────────────────────────┤
│  (다음 게시물 …)                │  피드 = 게시물 반복
└───────────────────────────────┘
```

- 게시물·댓글은 **JSON에서 로드**
- 좋아요/저장 **토글**, 댓글 **추가** 동작
- 게시물 없음 / 댓글 없음 **빈 상태** 처리

---

## 3주차 — JSX·엘리먼트 렌더링: **게시물 한 개 (정적)**

**목표:** 하드코딩한 데이터를 JSX + 중괄호로 화면에 표시.

**완성물:** 게시물 카드 1개 (유저명, 사진, 좋아요 수, 캡션). 상호작용·컴포넌트 분리 없음.

**핵심 스케치 (App.jsx):**

```jsx
function App() {
  const username = "minji_dev";
  const likes = 128;
  const caption = "오늘 React 배움 🔥";

  return (
    <article>
      <header>{username}</header>
      <img src="https://picsum.photos/400" alt="게시물 사진" width={400} />
      <p>♥ 💬 ✈</p>
      <p>좋아요 {likes}개</p>
      <p><b>{username}</b> {caption}</p>
    </article>
  );
}
export default App;
```

**개념 적용:** JSX 구조, `{ }`로 데이터 표시, 하나의 루트, 속성 중괄호(`width={400}`).
**실습 과제:** 유저명·좋아요 수·캡션을 자기 것으로 바꾸기. 사진 URL 바꾸기.

---

## 4주차 — 컴포넌트·Props: **PostCard로 분리, 피드 여러 개**

**목표:** 게시물 한 개를 컴포넌트로 만들고, 서로 다른 데이터로 여러 개 렌더.

**완성물:** `PostCard`(+`PostHeader`, `PostActions`) 분리. 게시물 3개를 각각 다른 props로. 상단 `StoryBar`.

**핵심 스케치:**

```jsx
function PostCard({ username, imageUrl, likes, caption }) {
  return (
    <article>
      <header>{username}</header>
      <img src={imageUrl} alt={`${username}의 게시물`} width={400} />
      <p>♥ 💬 ✈</p>
      <p>좋아요 {likes}개</p>
      <p><b>{username}</b> {caption}</p>
    </article>
  );
}

function App() {
  return (
    <main>
      <PostCard username="minji_dev" imageUrl="https://picsum.photos/id/11/400"
        likes={128} caption="오늘 React 배움 🔥" />
      <PostCard username="react_fan" imageUrl="https://picsum.photos/id/22/400"
        likes={57} caption="컴포넌트 최고" />
    </main>
  );
}
export default App;
```

**개념 적용:** 컴포넌트 분리, Props, 같은 카드·다른 데이터, children(스토리 틀). *(배열 map은 7주차 — 지금은 카드를 손으로 여러 번)*
**실습 과제:** 게시물 하나 더 추가, `StoryBar`에 아바타 추가, `PostActions`를 별도 컴포넌트로 빼기.

---

## 5주차 — State·이벤트: **좋아요·저장 토글, 댓글 입력**

**목표:** 클릭·입력으로 화면이 바뀌게.

**완성물:** 좋아요 하트 토글(♡↔♥, 좋아요 수 ±1), 저장 북마크 토글, 댓글 입력창(입력 State) + 게시 버튼으로 댓글 추가.

**핵심 스케치:**

```jsx
import { useState } from "react";

function PostCard({ username, imageUrl, likes }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(likes);

  function toggleLike() {
    setLiked(!liked);
    setCount(liked ? count - 1 : count + 1);
  }

  return (
    <article>
      {/* ... */}
      <button onClick={toggleLike}>{liked ? "♥" : "♡"}</button>
      <p>좋아요 {count}개</p>
    </article>
  );
}
```

**개념 적용:** `useState`, 이벤트 핸들러(전달 vs 호출), 불리언 State, 입력값 State.
**실습 과제:** 저장 토글 추가, 댓글 입력 → 게시 시 아래 목록에 추가, (여유) 더블탭 좋아요.
**주의:** `onClick={toggleLike}`(전달) ↔ `onClick={toggleLike()}`(즉시 호출) 구분.

---

## 6주차 — Hook: **JSON/API에서 피드 불러오기**

**목표:** 하드코딩을 걷어내고 외부 데이터로 채우기.

**완성물:** `public/posts.json`(또는 mock API)에서 `useEffect`로 게시물 로드, 로딩 표시, (여유) 스크롤로 더 불러오기.

**핵심 스케치:**

```jsx
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/posts.json")
      .then((res) => res.json())
      .then((data) => { setPosts(data); setLoading(false); });
  }, []);

  if (loading) return <p>불러오는 중…</p>;
  // posts 렌더 (map은 7주차에서 정리)
}
```

**개념 적용:** `useEffect`, 빈 의존성 배열(처음 한 번), 로딩 State, 정리 함수(스크롤/타이머 구독 시).
**실습 과제:** posts.json 만들어 로드, 로딩 스피너, (여유) 무한 스크롤.
**주의:** 개발 모드 StrictMode에서 Effect가 두 번 실행되는 이유 짚기.

---

## 7주차 — 조건부·리스트: **피드 완성 + 다듬기 + 배포**

**목표:** 배열을 목록으로, 상황에 따라 다른 화면. 그리고 배포.

**완성물:** 피드 = `posts.map(PostCard)`, 댓글 = `comments.map`, 좋아요 여부에 따라 하트 조건부, "게시물 없음"/"댓글 없음" 빈 상태, `key` 처리, (여유) 스토리 본 것/안 본 것 필터.

**핵심 스케치:**

```jsx
{posts.length === 0 ? (
  <p>아직 게시물이 없습니다.</p>
) : (
  posts.map((post) => <PostCard key={post.id} {...post} />)
)}
```

**개념 적용:** `map`, `key`(인덱스 금지), 조건부 렌더링(삼항·`&&`·`null`), 빈 상태, `filter`+`map`.
**실습 과제:** 피드를 배열로 렌더, 빈 상태 안내, 유저/태그 필터, **Vite 빌드 후 배포(GitHub Pages 등)**.

---

## 데이터 형태 (참고: public/posts.json)

```json
[
  {
    "id": "p1",
    "username": "minji_dev",
    "imageUrl": "https://picsum.photos/id/11/400",
    "likes": 128,
    "caption": "오늘 React 배움 🔥",
    "comments": [
      { "id": "c1", "username": "react_fan", "text": "멋져요!" }
    ]
  }
]
```

## 운영 메모

- **이론**은 인스타와 무관한 작은 예제로 개념을 가르치고(인터리브 유지), **실습**에서 그 개념을 클론에 적용한다. 이론까지 전부 인스타로 바꾸지 않는다.
- 매주 실습 시작 코드(지난주 완성본)를 `강의코드/`에 주차별로 둔다. 결석·진도 차이를 흡수.
- CSS는 공통 `insta.css`를 3주차에 한 번 주고 재사용. 매주 스타일에 시간 쓰지 않는다.
- 저작권: 학습용 클론임을 고지, 상표/로고 그대로 사용 금지, 이미지 placeholder.
