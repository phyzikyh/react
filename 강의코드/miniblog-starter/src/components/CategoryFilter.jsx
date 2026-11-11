function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="chips">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={category === active ? "chip chip--active" : "chip"}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
