import { useState, useEffect, useRef } from "react";
import "./App.css";
import { categories, initialPosts } from "./data";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Footer from "./components/Footer";

function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("전체");
  const [loading, setLoading] = useState(true);
  const searchRef = useRef(null);

  // 1초 뒤 로딩 끝 (서버에서 글을 불러오는 상황 흉내) - 수정하지 않습니다.
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  useEffect(() => {
    document.title = query ? `"${query}" 검색 중 - 미니 블로그` : "미니 블로그";
  }, [query]);

  // TODO 5-1: 좋아요를 토글하는 함수를 완성하세요.
  const toggleLike = (id) => {};

  // TODO 9-2: 새 글을 목록 맨 앞에 추가하는 함수를 완성하세요.
  const addPost = (data) => {};

  // TODO 10-1: 글을 삭제하는 함수를 완성하세요.
  const deletePost = (id) => {};

  // 카테고리와 검색어 조건을 모두 만족하는 글만 남깁니다.
  const keyword = query.trim();
  const visiblePosts = posts.filter((post) => {
    // TODO 6-1: 카테고리 조건 (지금은 항상 통과)
    const matchCategory = true;
    // TODO 7-1: 검색어 조건 (지금은 항상 통과)
    const matchQuery = true;
    return matchCategory && matchQuery;
  });

  // TODO 10-2: 좋아요를 누른 글의 개수를 계산하세요.
  const likedCount = 0;

  return (
    <>
      <Header title="미니 블로그" subtitle="나의 첫 리액트 블로그" likedCount={likedCount} />

      <main className="main">
        <PostForm categories={categories} onAdd={addPost} />

        <SearchBar query={query} onQueryChange={setQuery} inputRef={searchRef} />
        <CategoryFilter
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />

        {loading ? (
          <p className="status" role="status">
            글을 불러오는 중…
          </p>
        ) : (
          <PostList
            posts={visiblePosts}
            onToggleLike={toggleLike}
            onDelete={deletePost}
          />
        )}
      </main>

      <Footer>
        <p>© 2026 미니 블로그 · 전체 {posts.length}개의 글</p>
      </Footer>
    </>
  );
}

export default App;
