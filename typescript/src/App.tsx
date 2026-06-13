import { useEffect, useState } from "react"
import ProductCardsContainer from "./components/ProductCardsContainer"

export type ProductObj = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}

function App() {

  const [productsData, setProductsData] = useState<ProductObj[] | null>(null)

  useEffect(() => {
    async function fetchProductsData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products")
        const result = await response.json()
        setProductsData(result)
      } catch(error) {
        console.log("error: ", error)
      }
    }

    fetchProductsData()
  }, [])

  return (
    <main>
      <ProductCardsContainer productsData={productsData} />
    </main>
  )
}

export default App
