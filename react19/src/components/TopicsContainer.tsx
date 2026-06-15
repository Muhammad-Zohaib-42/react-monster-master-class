import TopicItem from "./TopicItem"

const topics = ['Technology', 'Design Thinking', 'Personal Growth']

const TopicsContainer = () => {
  return (
    <div className="border border-gray-200 py-3 px-4 rounded-lg">
        <h2 className="mb-3 font-semibold">Today's Top Trends</h2>
        <ul className="flex gap-1">
            {
                topics.map(topic => <TopicItem key={topic} title={topic} />)
            }
        </ul>
    </div>
  )
}

export default TopicsContainer