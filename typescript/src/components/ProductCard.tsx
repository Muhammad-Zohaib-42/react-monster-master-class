import { type ProductObj } from "../App";

type ProductCardProps = {
    product: ProductObj
}

const ProductCard = ({product}: ProductCardProps) => {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  };

  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "contain",
  };

  const titleStyle = {
    fontSize: "1.2rem",
    margin: "0",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  };

  const priceStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#2c3e50",
  };

  const descStyle = {
    fontSize: "0.9rem",
    color: "#666",
    height: "60px",
    overflow: "hidden",
  };

  return (
    <div style={cardStyle}>
      <img src={product.image} alt={product.title} style={imageStyle} />
      <h3 style={titleStyle}>{product.title}</h3>
      <p style={{ margin: "0", color: "#888", fontSize: "0.8rem" }}>
        {product.category}
      </p>
      <p style={priceStyle}>${product.price.toFixed(2)}</p>
      <p style={descStyle}>{product.description}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "0.85rem",
        }}
      >
        <span>⭐ {product.rating.rate}</span>
        <span>{product.rating.count} reviews</span>
      </div>
    </div>
  );
};

export default ProductCard;
