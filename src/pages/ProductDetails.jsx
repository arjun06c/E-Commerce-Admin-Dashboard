import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function ProductDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");


  useEffect(() => {
    fetchProduct();
  }, [id]);


  const fetchProduct = async () => {

    try {

      setLoading(true);

      const response = await api.get(
        `/products/${id}`
      );

      setProduct(response.data);

    } catch (error) {

      setError("Unable to load product details.");

    } finally {

      setLoading(false);

    }

  };


  if (loading) {
    return <h2>Loading product details...</h2>;
  }


  if (error) {
    return <h2>{error}</h2>;
  }


  return (
    <div className="product-details">

      <button
        onClick={() => navigate("/products")}
        className="back-button"
      >
        ← Back to Products
      </button>


      <div className="product-details-card">

        <div className="product-details-image">

          <img
            src={product.thumbnail}
            alt={product.title}
          />

        </div>


        <div className="product-details-info">

          <p className="product-category">
            {product.category}
          </p>

          <h1>
            {product.title}
          </h1>

          <p className="product-description">
            {product.description}
          </p>

          <h2>
            ${product.price}
          </h2>

          <p>
            Rating: ⭐ {product.rating}
          </p>

          <p>
            Stock: {product.stock}
          </p>

          <p>
            Brand: {product.brand}
          </p>

          <p>
            Discount: {product.discountPercentage}%
          </p>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;