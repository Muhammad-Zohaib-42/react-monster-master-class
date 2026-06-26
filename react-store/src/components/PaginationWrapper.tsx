import { useContext } from "react"
import NumPaginationBtnsWrapper from "./NumPaginationBtnsWrapper"
import PaginationTextBtn from "./PaginationTextBtn"
import { StoreContext } from "../contexts/StoreContext"

const PaginationWrapper = () => {
  const {productsData} = useContext(StoreContext)!

  return (
    <div className="flex items-center justify-between py-2 mt-3" style={{display: productsData.length >= 1 ? "flex" : "none"}}>
        <PaginationTextBtn text="Previous" />
        <NumPaginationBtnsWrapper />
        <PaginationTextBtn text="Next" />
    </div>
  )
}

export default PaginationWrapper