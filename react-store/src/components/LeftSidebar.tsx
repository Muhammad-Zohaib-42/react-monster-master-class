import CategorySection from "./CategoriesSection"
import KeywordsSection from "./KeywordsSection"

const LeftSidebar = () => {
  return (
    <aside className="w-[280px] h-full px-5 py-3 overflow-y-auto scrollbar-none">
        <h1 className="font-semibold text-xl mb-4">React Store</h1>
        <input className="input mb-2" type="text" name="search-input" placeholder="Search Product" />
        <div className="flex gap-2">
            <input className="input w-1/2" type="text" name="min-input" placeholder="Min" />
            <input className="input w-1/2" type="text" name="max-input" placeholder="Max" />
        </div>
        <CategorySection />
        <KeywordsSection />
        <button className="p-2 bg-slate-700 text-slate-200 transition hover:bg-slate-800 hover:text-slate-100 cursor-pointer w-full mt-7">Reset Filters</button>
    </aside>
  )
}

export default LeftSidebar