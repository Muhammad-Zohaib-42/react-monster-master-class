import NumPaginationBtnsWrapper from "./NumPaginationBtnsWrapper"
import PaginationTextBtn from "./PaginationTextBtn"

const PaginationWrapper = () => {
  return (
    <div className="flex items-center justify-between py-2 mt-3">
        <PaginationTextBtn text="Previous" />
        <NumPaginationBtnsWrapper />
        <PaginationTextBtn text="Next" />
    </div>
  )
}

export default PaginationWrapper