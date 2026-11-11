// 7주차: 글 데이터는 "객체의 배열" 로 따로 관리합니다. (id 는 key 로 사용)
export const categories = ["전체", "일상", "공부", "여행"];

export const initialPosts = [
  {
    id: 1,
    title: "리액트 첫 수업 후기",
    author: "홍길동",
    date: "2026-03-02",
    category: "공부",
    likes: 12,
    liked: false,
    isNew: false,
    content:
      "오늘 처음으로 JSX를 배웠다. HTML과 비슷하지만 class 대신 className을 쓰고, 중괄호 안에 자바스크립트 표현식을 넣을 수 있다는 점이 신기했다.",
  },
  {
    id: 2,
    title: "부천 중앙공원 산책",
    author: "홍길동",
    date: "2026-03-05",
    category: "일상",
    likes: 3,
    liked: false,
    isNew: false,
    content:
      "수업이 끝나고 친구들과 중앙공원을 걸었다. 날씨가 좋아서 벚꽃이 곧 필 것 같다.",
  },
  {
    id: 3,
    title: "이번 학기 목표",
    author: "김리액",
    date: "2026-03-07",
    category: "일상",
    likes: 0,
    liked: false,
    isNew: false,
    content:
      "미니 블로그를 끝까지 만들어 보는 것! 매주 조금씩 기능을 붙여 가면서 리액트와 친해지려고 한다.",
  },
  {
    id: 4,
    title: "제주 2박 3일 여행 계획",
    author: "박코딩",
    date: "2026-11-08",
    category: "여행",
    likes: 7,
    liked: false,
    isNew: true,
    content:
      "방학에 제주도에 가기로 했다. 첫째 날은 협재 해변, 둘째 날은 한라산 둘레길, 셋째 날은 시장에서 먹거리 투어!",
  },
  {
    id: 5,
    title: "useEffect 정리 노트",
    author: "김리액",
    date: "2026-11-10",
    category: "공부",
    likes: 5,
    liked: false,
    isNew: true,
    content:
      "의존성 배열이 []이면 처음 한 번, [값]이면 값이 바뀔 때마다 실행된다. 타이머나 이벤트 리스너는 cleanup 으로 꼭 정리하기.",
  },
];
