function ProductFilters({
  search,
  setSearch,
  category,
  setCategory,
  sortBy,
  setSortBy
}) {

  return (
    <div className="product-filters">

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="all">
          All Categories
        </option>

        <option value="beauty">
          Beauty
        </option>

        <option value="fragrances">
          Fragrances
        </option>

        <option value="furniture">
          Furniture
        </option>

        <option value="groceries">
          Groceries
        </option>
      </select>

      <select
        value={sortBy}
        onChange={(event) => setSortBy(event.target.value)}
      >
        <option value="default">
          Sort By
        </option>

        <option value="name-asc">
          Name: A-Z
        </option>

        <option value="name-desc">
          Name: Z-A
        </option>

        <option value="price-low">
          Price: Low to High
        </option>

        <option value="price-high">
          Price: High to Low
        </option>

        <option value="rating-high">
          Rating: High to Low
        </option>
      </select>

    </div>
  );
}

export default ProductFilters;