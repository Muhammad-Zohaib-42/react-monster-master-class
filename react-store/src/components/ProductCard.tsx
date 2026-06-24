type ProductCardProps = {
    imgSrc: string,
    title: string,
    price: number
}

const ProductCard = ({imgSrc, title, price}: ProductCardProps) => {
  return (
    <div className="border border-slate-300 pt-3">
        <div className="h-40">
            <img className="h-full w-full object-contain" src={imgSrc} alt={`${title} image`} />
        </div>
        <div className="px-4 pt-4 pb-3">
            <h3 className="font-semibold">{title}</h3>
            <p>${price}</p>
        </div>
    </div>
  )
}

export default ProductCard