import React from "react";

function FilterBar({ filter = "all", setFilter }) {
  const categories = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Completed", value: "completed" },
  ];

  return (
    <div className="filter-bar">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => setFilter && setFilter(cat.value)}
          className={`filter-btn ${filter === cat.value ? "active" : ""}`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;