import { useContext, type Dispatch, type SetStateAction } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { StoreContext } from "../contexts/StoreContext"

type PaginationTextBtnProps = {
    text: string
}

function handleCurrentPageIndex(text: string, setCurrentPage: Dispatch<SetStateAction<number>>) {
  if (text == "Next") {
    setCurrentPage(prev => prev + 1)
  } else if (text == "Previous") {
    setCurrentPage(prev => prev - 1)
  }
}

const PaginationTextBtn = ({text}: PaginationTextBtnProps) => {
  const {setCurrentPage} = useContext(StoreContext)!

  return (
    <button onClick={() => handleCurrentPageIndex(text, setCurrentPage)} className="px-2 py-1 border border-slate-300 transition hover:bg-slate-200 flex items-center gap-1">
        {text == "Previous" && <FaArrowLeft />}
        <span>{text}</span>
        {text == "Next" && <FaArrowRight />}
    </button>
  )
}

export default PaginationTextBtn