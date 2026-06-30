import { useContext, useEffect } from "react"
import ProductCard from "./ProductCard"
import { StoreContext } from "../contexts/StoreContext"
import ProductCardShimmer from "./ProductCardShimmer"

const ProductContainer = () => {
  const {productsData, setProductsData, currentPage, itemsPerPage, searchQuery, minPrice, maxPrice} = useContext(StoreContext)!

  async function fetchProductsData() {
    const response = await fetch(`https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`)
    const data = await response.json()
    setProductsData(data.products)
  }

  useEffect(() => {
    fetchProductsData()
  }, [currentPage])

  let filterProducts = null

  filterProducts = productsData.filter(productData => productData.title.toLowerCase().includes(searchQuery.toLowerCase()))

  if (minPrice) {
    filterProducts = productsData.filter(productData => productData.price > minPrice)
  }

  if (maxPrice) {
    filterProducts = productsData.filter(productData => productData.price < maxPrice)
  }

  if (minPrice && maxPrice) {
    filterProducts = productsData.filter(productData => productData.price > minPrice && productData.price < maxPrice)
  }

  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3">
        {
          productsData.length >= 1 ? filterProducts.map(productData => <ProductCard key={productData.id} imgSrc={productData.thumbnail} title={productData.title} price={productData.price} />) : Array.from({length: 8}).map((_,index) => <ProductCardShimmer key={index} />)
        }
    </section>
  )
}

export default ProductContainer