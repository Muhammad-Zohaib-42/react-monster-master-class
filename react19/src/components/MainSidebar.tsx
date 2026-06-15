import FollowContainer from "./FollowContainer"
import TopicsContainer from "./TopicsContainer"
import TrendsContainer from "./TrendsContainer"

const MainSidebar = () => {
  return (
    <aside className="w-100 flex flex-col gap-4">
        <FollowContainer />
        <TrendsContainer />
        <TopicsContainer />
    </aside>
  )
}

export default MainSidebar