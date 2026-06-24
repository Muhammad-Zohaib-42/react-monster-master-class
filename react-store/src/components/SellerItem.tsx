import { useState } from "react"

type SellerItemProps = {
    imgSrc: string,
    username: string
}

const SellerItem = ({imgSrc, username}: SellerItemProps) => {
  const [isFollowing, setIsFollowing] = useState<boolean>(false)

  return (
    <li className="flex items-center gap-1.5">
        <img className="h-8 w-8 rounded-full" src={imgSrc} alt={`${username} imaage`} />
        <p className="grow truncate">{username}</p>
        <button onClick={() => setIsFollowing(!isFollowing)} className={`py-1 px-2 transition text-sm cursor-pointer ${isFollowing ? "bg-red-500 hover:bg-red-600 text-slate-200 hover:text-slate-100" : "bg-slate-700 text-slate-200 hover:bg-slate-800 hover:text-slat-100"}`}>{isFollowing ? "Following" : "Follow"}</button>
    </li>
  )
}

export default SellerItem