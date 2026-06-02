import React, { useEffect, useState } from 'react'
import ProductCard from './components/ProductCard'

const App = () => {
  const [data, setData] = useState([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      if (data && data.length) {
        setIsLoading(false)
        setData(data)
      }
    }
    
    fetchData()
  }, [])

  return (
    <main style={{display:'grid',gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '.5rem'}}>
      {
        data.map(obj => <ProductCard isLoading={isLoading} product={obj} />)
      }
    </main>
  )
}

export default App