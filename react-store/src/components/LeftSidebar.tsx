import CategorySection from "./CategoriesSection"

const LeftSidebar = () => {
  return (
    <aside className="w-[250px] h-full">
        <h1>React Store</h1>
        <input type="text" name="search-input" placeholder="Search Product" />
        <div>
            <input type="text" name="min-input" placeholder="Min" />
            <input type="text" name="max-input" placeholder="Max" />
        </div>
        <CategorySection />
    </aside>
  )
}

export default LeftSidebar