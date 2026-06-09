import { TiShoppingCart } from "react-icons/ti";
import ChoiceBox from "./ChoiceBox";

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <div className="header">
            <TiShoppingCart size={30} />
        </div>
        <div className="choice-boxes-container">
            <div>
                <ChoiceBox title="Category" radioBtns={['All', 'Sneakers', 'Flats', 'Sandals', 'Heels']} />
                <ChoiceBox title="Price" radioBtns={['All', '$0-50', '$50-100', '$100-150', 'Over $150']}  />
                <ChoiceBox title="Colors" radioBtns={['All', 'Black', 'Blue', 'Red', 'Green', 'White']}  />
            </div>
        </div>
    </aside>
  )
}

export default Sidebar