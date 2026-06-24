import BlogsSection from "./BlogsSection"
import SellersSection from "./SellersSection"

const RightSidebar = () => {
  return (
    <aside className="w-[280px] h-full flex flex-col gap-2 py-5 overfow-y-auto scrollbar-none">
        <SellersSection />
        <BlogsSection />
    </aside>
  )
}

export default RightSidebar