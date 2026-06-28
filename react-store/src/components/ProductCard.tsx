type ProductCardProps = {
    imgSrc: string,
    title: string,
    price: number
}

const ProductCard = ({imgSrc, title, price}: ProductCardProps) => {
  return (
    <div className="border border-slate-300 pt-3">
        <div className="h-40">
            <img className="h-full w-full object-contain" src={imgSrc} alt={`${title} image`} loading="lazy" />
        </div>
        <div className="px-4 pt-4 pb-3">
            <h3 className="font-semibold truncate">{title}</h3>
            <p className="text-slate-500">${price}</p>
        </div>
    </div>
  )
}

export default ProductCard