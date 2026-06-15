import TrendsItem from "./TrendsItem"

const trendsData = [
    {
        title: 'Be the person you are on vacation',
        description: 'By Maren Tarff'
    },
    {
        title: 'Web Development in 2026',
        description: 'By Maren Tarff'
    },
    {
        title: 'AI & ML in 2026',
        description: 'By Maren Tarff'
    }
]

const TrendsContainer = () => {
  return (
    <div className="border border-gray-200 py-3 px-4 rounded-lg">
        <h2 className="mb-3 font-semibold">Today's Top Trends</h2>
        <ul className="flex flex-col gap-2">
            {
                trendsData.map(({title, description}) => <TrendsItem key={title} title={title} description={description} />)
            }
        </ul>
    </div>
  )
}

export default TrendsContainer