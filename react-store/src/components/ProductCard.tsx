type ProductCardProps = {
    imgSrc: string,
    title: string,
    price: number
}

const ProductCard = ({imgSrc, title, price}: ProductCardProps) => {
  return (
    <div className="border border-slat-300">
        <div>
            <img src={imgSrc} alt={`${title} image`} />
        </div>
        <div className="p-2">
            <h3>{title}</h3>
            <p>${price}</p>
        </div>
    </div>
  )
}

export default ProductCard