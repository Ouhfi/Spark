function CategoryFilter({ filter, setFilter }) {
  const categories = ["Tous", "Créatif", "Bien-être", "Social"];

  return (
    <div className="filter">
      {categories.map((cat) => (
        <button
          key={cat}
          className={filter === cat ? "active" : ""}
          onClick={() => setFilter(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
