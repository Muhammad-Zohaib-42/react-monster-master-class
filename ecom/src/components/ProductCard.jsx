import { FaStar } from "react-icons/fa";
import { IoBag } from "react-icons/io5";

const ProductCard = ({shoeData}) => {
  return (
    <div className="product-card">
        <div className="frame">
            <img loading="lazy" src={shoeData.imageSrc} alt={`${shoeData.name} ${shoeData.category}`} />
        </div>
        <div className="card-content">
            <h4 className="title">{shoeData.name}</h4>
            <div className="wrapper">
                <div>
                    <FaStar color="gold" size={14} />
                    <FaStar color="gold" size={14} />
                    <FaStar color="gold" size={14} />
                    <FaStar color="gold" size={14} />
                    <FaStar color="gold" size={14} />
                </div>
                <span className="reviews-span">({shoeData.reviewCount} reviews)</span>
            </div>
            <div className="wrapper price-wrapper">
                <div>
                    <span className="price-span">${shoeData.oldPrice}</span>
                    <span className="price-span">{shoeData.newPrice}</span>
                </div>
                <IoBag size={14} />
            </div>
        </div>
    </div>
  )
}

export default ProductCard