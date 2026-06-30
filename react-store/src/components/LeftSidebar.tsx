import { useContext } from "react"
import { StoreContext } from "../contexts/StoreContext"
import CategorySection from "./CategoriesSection"
import KeywordsSection from "./KeywordsSection"

const LeftSidebar = () => {
  const {productsData, searchQuery, setSearchQuery, minPrice, setMinPrice, maxPrice, setMaxPrice} = useContext(StoreContext)!

  return (
    <aside className="w-70 h-full px-5 py-3 overflow-y-auto scrollbar-none">
        <h1 className="font-semibold text-xl mb-4">React Store</h1>
        <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="input mb-2" type="text" name="search-input" placeholder="Search Product" />
        <div className="flex gap-2">
            <input value={minPrice ? minPrice : ""} onChange={e => setMinPrice(Number(e.target.value))} className="input w-1/2" type="text" name="min-input" placeholder="Min" />
            <input value={maxPrice ? maxPrice : ""} onChange={e => setMaxPrice(Number(e.target.value))} className="input w-1/2" type="text" name="max-input" placeholder="Max" />
        </div>
        <CategorySection />
        <KeywordsSection />
        <button className="p-2 bg-slate-700 text-slate-200 transition hover:bg-slate-800 hover:text-slate-100 cursor-pointer w-full mt-7" disabled={productsData.length < 1 ? true : false} title={productsData.length < 1 ? "Wait ! Loading Products..." : ""}>Reset Filters</button>
    </aside>
  )
}

export default LeftSidebar