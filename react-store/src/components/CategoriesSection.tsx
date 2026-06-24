import RadioInput from "./RadioInput"

const CategorySection = () => {
  const radioItems: string[] = ['beauty', 'fragrances', 'furniture', 'groceries']

  return (
    <div className="my-5">
        <h2 className="section-title mb-0.5">Categories</h2>
        <ul className="section-list">
          {
              radioItems.map(radioItem => <RadioInput key={radioItem} text={radioItem} />)
          }
        </ul>
    </div>
  )
}

export default CategorySection