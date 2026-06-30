import type { FC } from "react"

const NumPaginationBtn: FC<{num: number, isActive: boolean}> = ({num, isActive}) => {
  return (
    <div className={`h-8 w-8 rounded-full border nth-[1]:w-6 nth-[1]:h-6 nth-[1]:text-xs nth-[2]:w-7 nth-[2]:h-7 nth-[2]:text-sm nth-[4]:w-7 nth-[4]:h-7 nth-[4]:text-sm nth-[5]:w-6 nth-[5]:h-6 nth-[5]:text-xs text-center grid place-content-center ${isActive ? "border-slate-800 text-slate-100 bg-slate-800" : "border-slate-300 bg-slate-100 text-slate-800"}`}>{num}</div>
  )
}

export default NumPaginationBtn