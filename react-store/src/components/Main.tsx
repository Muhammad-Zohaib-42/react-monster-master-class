import FilterBtn from "./FilterBtn"
import PaginationWrapper from "./PaginationWrapper"
import ProductContainer from "./ProductContainer"

const Main = () => {
  return (
    <main className="grow h-full overflow-y-auto scrollbar-none py-5 px-7">
      <div>
        <FilterBtn />
        <ProductContainer />
        <PaginationWrapper />
      </div>
    </main>
  )
}

export default Main