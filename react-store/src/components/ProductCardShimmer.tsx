const ProductCardShimmer = () => {
  return (
    <div className="border border-slate-300 pt-3 animate-pulse">
        <div className="h-40 bg-gray-300 mx-2"></div>
        <div className="px-4 pt-4 pb-3">
            <div className="w-full h-2 bg-gray-300 mb-2"></div>
            <div className="w-16 h-2 bg-gray-300"></div>
        </div>
    </div>
  )
}

export default ProductCardShimmer