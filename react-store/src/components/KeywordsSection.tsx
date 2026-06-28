import { useContext } from "react"
import KeywordItem from "./KeywordItem"
import { StoreContext } from "../contexts/StoreContext"

const KeywordsSection = () => {
  const {productsData} = useContext(StoreContext)!

  const categories = [...new Set(productsData.map(productData => productData.category))]
  let tagsArray: string[] = []
  productsData.map(productData => productData.tags).forEach(tags => tagsArray.push(...tags))
  tagsArray = tagsArray.filter(tag => !categories.find(category => tag == category))
  tagsArray = [...new Set(tagsArray)]

  const keywords: string[] = tagsArray

  return (
    <div>
        <h2 className="section-title mb-1">Keywords</h2>
        <ul className="section-list gap-1.5">
            {
                keywords.length < 1 ? <p>Loading Keywords...</p> : keywords.map(keyword => <KeywordItem key={keyword} keyword={keyword} />)
            }
        </ul>
    </div>
  )
}

export default KeywordsSection