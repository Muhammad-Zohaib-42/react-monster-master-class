import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import Btn from "./Btn";
import ProductCard from "./ProductCard";
import { useContext } from "react";
import { ShoesContext } from "../ShoesContext";

const MainContent = () => {
  const {data, showData} = useContext(ShoesContext)

  return (
    <div className="right-container">
        <div className="header">
            <input className="search-input" type="text" placeholder="Enter your search shoes" />
            <div className="icons-wrapper">
                <IoIosHeartEmpty size={20} />
                <IoCartOutline size={20} />
                <IoPersonOutline size={20} />
            </div>
        </div>
        <div className="recommended-section">
          <h3 className="title">Recommended</h3>
          <div>
            {
              ['All Products', 'Nike', 'Adidas', 'Puma', 'Vans', 'Teva'].map(text => <Btn key={text} text={text} />)
            }
          </div>
        </div>
        <div className="product-cards-container">
          {
            showData.map(shoeData => <ProductCard key={shoeData.id} shoeData={shoeData} />)
          }
        </div>
    </div>
  )
}

export default MainContent