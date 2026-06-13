const ProductCardShimmer = () => {
  const shimmerKeyframes = `
    @keyframes shimmer {
      0% { background-position: -468px 0; }
      100% { background-position: 468px 0; }
    }
  `;

  const baseStyle = {
    background: "#f6f7f8",
    backgroundImage:
      "linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "800px 100%",
    animation: "shimmer 1s linear infinite",
  };

  const cardStyle = {
    border: "1px solid #eee",
    borderRadius: "8px",
    padding: "16px",
    width: "300px",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  };

  return (
    <div style={cardStyle}>
      <style>{shimmerKeyframes}</style>
      {/* Image Placeholder */}
      <div
        style={{
          ...baseStyle,
          width: "100%",
          height: "200px",
          borderRadius: "4px",
        }}
      />

      {/* Title Placeholder */}
      <div
        style={{
          ...baseStyle,
          width: "80%",
          height: "20px",
          borderRadius: "4px",
        }}
      />

      {/* Category Placeholder */}
      <div
        style={{
          ...baseStyle,
          width: "40%",
          height: "15px",
          borderRadius: "4px",
        }}
      />

      {/* Price Placeholder */}
      <div
        style={{
          ...baseStyle,
          width: "30%",
          height: "20px",
          borderRadius: "4px",
        }}
      />

      {/* Description Placeholder */}
      <div
        style={{
          ...baseStyle,
          width: "100%",
          height: "40px",
          borderRadius: "4px",
        }}
      />
    </div>
  );
};

export default ProductCardShimmer;
