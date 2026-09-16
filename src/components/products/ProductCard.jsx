import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />

      <div className="product-info">
        <h3>{product.title}</h3>

        <p>{product.category}</p>

        <strong>${product.price}</strong>

        <br />

        <Link to={`/products/${product.id}`} className="product-details-link">
          View Details →
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
