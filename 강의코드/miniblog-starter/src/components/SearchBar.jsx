// 입력값(query)은 부모가 갖고 있고, 이 컴포넌트는 보여 주기만 합니다.
// ref 는 inputRef 라는 일반 prop 으로 받습니다.
function SearchBar({ query, onQueryChange, inputRef }) {
  return (
    <input
      ref={inputRef}
      className="search"
      type="text"
      placeholder="제목이나 내용으로 검색"
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
    />
  );
}

export default SearchBar;
