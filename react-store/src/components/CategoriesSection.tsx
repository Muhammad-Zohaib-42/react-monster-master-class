import RadioInput from "./RadioInput"

const CategorySection = () => {
  const radioItems: string[] = ['beauty', 'fragrances', 'furniture', 'groceries']

  return (
    <div>
        <h2>Categories</h2>
        {
            radioItems.map(radioItem => <RadioInput text={radioItem} />)
        }
    </div>
  )
}

export default CategorySection