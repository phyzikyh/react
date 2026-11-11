import { useState } from "react";

const emptyForm = { title: "", author: "", category: "일상", content: "" };

// TODO 8-1: 입력값을 검사해서 오류 객체를 반환하세요.
//   - 제목이 비어 있으면 errors.title = "제목을 입력해 주세요."
//   - 작성자가 비어 있으면 errors.author = "작성자를 입력해 주세요."
//   - 내용이 10자 미만이면 errors.content = "내용은 10자 이상 입력해 주세요."
//   (앞뒤 공백은 trim() 으로 제거하고 검사합니다)
function validate(form) {
  const errors = {};
  return errors;
}

function PostForm({ categories, onAdd }) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // TODO 8-2: input 의 name 과 value 를 읽어 form state 의 해당 항목만 바꾸세요.
  //   (setForm 에 함수를 넘기고, 스프레드와 [name] 을 사용합니다)
  const handleChange = (e) => {
    setSubmitted(false);
  };

  // 제출하면 먼저 검사하고, 오류가 있으면 여기서 멈춥니다. (완성되어 있습니다)
  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // TODO 9-1: 검사를 통과했을 때의 처리를 완성하세요.
    //   1) onAdd({ title, author, category, content }) 호출 (모두 trim)
    //   2) setForm(emptyForm), setSubmitted(true)
  };

  // 아래 JSX 는 완성되어 있습니다. 수정하지 않아도 됩니다.
  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <h2>새 글 쓰기</h2>

      <div className="field">
        <label htmlFor="title">제목</label>
        <input
          id="title"
          name="title"
          type="text"
          value={form.title}
          onChange={handleChange}
        />
        {errors.title && (
          <p className="error" role="alert">
            {errors.title}
          </p>
        )}
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="author">작성자</label>
          <input
            id="author"
            name="author"
            type="text"
            value={form.author}
            onChange={handleChange}
          />
          {errors.author && (
            <p className="error" role="alert">
              {errors.author}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="category">카테고리</label>
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            {categories
              .filter((c) => c !== "전체")
              .map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          name="content"
          rows={4}
          value={form.content}
          onChange={handleChange}
        />
        <p className="hint">{form.content.length}자</p>
        {errors.content && (
          <p className="error" role="alert">
            {errors.content}
          </p>
        )}
      </div>

      <div className="form__actions">
        <button type="submit" className="btn-primary">
          등록하기
        </button>
        {submitted && (
          <span className="success" role="status">
            글이 등록되었어요!
          </span>
        )}
      </div>
    </form>
  );
}

export default PostForm;
