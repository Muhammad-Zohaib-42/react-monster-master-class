import type { NumObj } from "./NumPaginationBtnsWrapper"

const NumPaginationBtn = ({num, isActive}: NumObj) => {
  return (
    <button className={`h-8 w-8 rounded-full border ${isActive ? "border-slate-800 text-slate-100 bg-slate-800" : "border-slate-300 bg-slate-100 text-slate-800"}`}>{num}</button>
  )
}

export default NumPaginationBtn