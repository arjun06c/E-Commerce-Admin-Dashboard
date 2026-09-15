import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/products/ProductCard";
import ProductFilters from "../components/products/ProductFilters";
import Loader from "../components/common/Loader";
import ErrorMessage from "../components/common/ErrorMessage";
function Products() {

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("all");

  const [sortBy, setSortBy] = useState("default");


  useEffect(() => {
    fetchProducts();
  }, []);


  const fetchProducts = async () => {

    try {

      setLoading(true);

      const response = await api.get("/products");

      setProducts(response.data.products);

    } catch (error) {

      setError("Unable to load products.");

    } finally {

      setLoading(false);

    }

  };


  const filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.title
        .toLowerCase()
        .includes(search.toLowerCase());


    const matchesCategory =
      category === "all" ||
      product.category === category;


    return matchesSearch && matchesCategory;

  });


  const sortedProducts = [...filteredProducts].sort(
    (a, b) => {

      if (sortBy === "name-asc") {

        return a.title.localeCompare(b.title);

      }


      if (sortBy === "name-desc") {

        return b.title.localeCompare(a.title);

      }


      if (sortBy === "price-low") {

        return a.price - b.price;

      }


      if (sortBy === "price-high") {

        return b.price - a.price;

      }


      if (sortBy === "rating-high") {

        return b.rating - a.rating;

      }


      return 0;

    }
  );

if (loading) {
  return <Loader message="Loading products..." />;
}

if (error) {
  return (
    <ErrorMessage
      message={error}
      onRetry={fetchProducts}
    />
  );
}

  return (
    <div>

      <h1>Products</h1>


      <ProductFilters
        search={search}
        setSearch={setSearch}

        category={category}
        setCategory={setCategory}

        sortBy={sortBy}
        setSortBy={setSortBy}
      />


      <div className="product-grid">

        {sortedProducts.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </div>
  );
}

export default Products;