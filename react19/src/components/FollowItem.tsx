import type { FC } from "react"
import { FaUserCircle } from "react-icons/fa"

type FollowItemProps = {
    name: string,
    isFollowing: boolean
}

const FollowItem: FC<FollowItemProps> = ({name, isFollowing}) => {
  return (
    <li className="flex items-center justify-between">
        <div className="flex items-center gap-2">
            <FaUserCircle className="text-gray-600" size={20} />
            <p className="text-[16px] text-gray-700">{name}</p>
        </div>
        <button className={`text-sm rounded-full px-3 py-1 cursor-pointer ${isFollowing ? "bg-green-600 text-gray-200" : "bg-gray-200 text-gray-800"}`}>{isFollowing ? "Following" : "Follow"}</button>
    </li>
  )
}

export default FollowItem