import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

type PaginationTextBtnProps = {
    text: string
}

const PaginationTextBtn = ({text}: PaginationTextBtnProps) => {
  return (
    <button className="px-2 py-1 border border-slate-300 transition hover:bg-slate-200 flex items-center gap-1">
        {text == "Previous" && <FaArrowLeft />}
        <span>{text}</span>
        {text == "Next" && <FaArrowRight />}
    </button>
  )
}

export default PaginationTextBtn