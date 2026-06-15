import FollowItem from "./FollowItem"

const peoplesData = [
    {
        name: "Muhammad Zohaib",
        isFollowing: false
    },
    {
        name: "Muhammad Shoaib",
        isFollowing: true
    },
    {
        name: "Muhammad Sohail",
        isFollowing: false
    },
    {
        name: "Muhammad Danial",
        isFollowing: false
    },
]

const FollowContainer = () => {
  return (
    <div className="border border-gray-200 border-t-0 py-3 px-4 rounded-lg">
        <h2 className="mb-2 font-semibold">People to follow</h2>
        <ul className="flex flex-col gap-1.5">
            {
                peoplesData.map(({name, isFollowing}) => <FollowItem key={name} name={name} isFollowing={isFollowing} />)
            }
        </ul>
    </div>
  )
}

export default FollowContainer