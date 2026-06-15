type TopicItemProps = {
    title: string
}

const TopicItem = ({title}: TopicItemProps) => {
  return (
    <div className="text-sm rounded-full px-3 py-1.5 bg-gray-200">{title}</div>
  )
}

export default TopicItem