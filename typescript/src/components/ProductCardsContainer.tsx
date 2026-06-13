import type { ProductObj } from "../App"
import ProductCard from "./ProductCard"
import ProductCardShimmer from "./ProductCardShimmer"

const ProductCardsContainer = ({productsData}: {productsData: null | ProductObj[]}) => {
  return (
    <section style={{display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "2rem", padding: "2rem"}}>
        {
            !productsData ? Array.from({length: 15}).map(() => <ProductCardShimmer key={crypto.randomUUID()} />) : productsData.map(productData => <ProductCard key={productData.id} product={productData} />)
        }
    </section>
  )
}

export default ProductCardsContainer