import { useContext } from "react"
import RadioInput from "./RadioInput"
import { StoreContext } from "../contexts/StoreContext"

const CategorySection = () => {
  const {productsData} = useContext(StoreContext)!
  const radioItems: string[] = productsData.reduce<string[]>((acc,curr) => {
    if (!acc.find(elem => elem == curr.category)) acc.push(curr.category)
    return acc
  }, [])

  return (
    <div className="my-5">
        <h2 className="section-title mb-0.5">Categories</h2>
        <ul className="section-list">
          {
              productsData.length < 1 ? <p>Loading Categories...</p> : radioItems.map(radioItem => <RadioInput key={radioItem} text={radioItem} />)
          }
        </ul>
    </div>
  )
}

export default CategorySection