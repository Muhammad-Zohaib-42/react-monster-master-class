type TrendsItem = {
    title: string,
    description: string
}

const TrendsItem = ({title, description}: TrendsItem) => {
  return (
    <li>
        <h3 className="leading-none">{title}</h3>
        <p className="text-gray-500">{description}</p>
    </li>
  )
}

export default TrendsItem