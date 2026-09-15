function ProductFilters({
  search,
  setSearch,
  category,
  setCategory,
  sortBy,
  setSortBy
}) {

  return (
    <div className="product-filter-card">

      <div className="filter-group search-group">

        <label>
          Search Products
        </label>

        <div className="search-box">

          <span className="search-icon">
            🔍
          </span>

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />

        </div>

      </div>


      <div className="filter-group">

        <label>
          Category
        </label>

        <select
          value={category}
          onChange={(event) =>
            setCategory(event.target.value)
          }
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

      </div>


      <div className="filter-group">

        <label>
          Sort By
        </label>

        <select
          value={sortBy}
          onChange={(event) =>
            setSortBy(event.target.value)
          }
        >

          <option value="default">
            Default
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

    </div>
  );
}

export default ProductFilters;