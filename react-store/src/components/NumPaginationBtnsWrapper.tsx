import { useContext } from "react"
import NumPaginationBtn from "./NumPaginationBtn"
import { StoreContext } from "../contexts/StoreContext"

const NumPaginationBtnsWrapper = () => {
  const {currentPage} = useContext(StoreContext)!

  let nums: number[] = []

  const loopStartingNum = currentPage >= 3 ? currentPage - 2 : 1

  for (let i = loopStartingNum; i <= loopStartingNum + 4; i++) {
    nums.push(i)
  }

  return (
    <div className="flex items-center gap-3">
        {
            nums.map(num => <NumPaginationBtn key={num} num={num} isActive={num == currentPage ? true : false} />)
        }
    </div>
  )
}

export default NumPaginationBtnsWrapper