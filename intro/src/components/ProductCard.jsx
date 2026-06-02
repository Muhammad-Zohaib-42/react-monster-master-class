import React from 'react';

const ProductCard = ({ product, isLoading }) => {
  // Styles for the shimmer effect
  const shimmerStyle = {
    animation: 'shimmer 1.5s infinite linear',
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
    backgroundSize: '200% 100%',
    borderRadius: '8px',
  };

  const cardStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '20px',
    maxWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    backgroundColor: '#ffffff',
    position: 'relative',
    overflow: 'hidden'
  };

  // Add keyframes via a small style block
  const styleSheet = `
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
  `;

  if (isLoading) {
    return (
      <div style={cardStyle}>
        <style>{styleSheet}</style>
        <div style={{ ...shimmerStyle, width: '150px', height: '150px', marginBottom: '15px' }} />
        <div style={{ ...shimmerStyle, width: '90%', height: '20px', marginBottom: '10px' }} />
        <div style={{ ...shimmerStyle, width: '50%', height: '20px', marginBottom: '10px' }} />
        <div style={{ ...shimmerStyle, width: '100%', height: '40px' }} />
      </div>
    );
  }

  return (
    <div style={cardStyle}>
      <img src={product.image} alt={product.title} style={{ width: '150px', height: '150px', objectFit: 'contain' }} />
      <h3 style={{ fontSize: '18px', textAlign: 'center' }}>{product.title}</h3>
      <p style={{ fontSize: '20px', color: '#2ecc71', fontWeight: 'bold' }}>${product.price}</p>
    </div>
  );
};

export default ProductCard;