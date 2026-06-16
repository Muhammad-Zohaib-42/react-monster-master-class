import DashboardTable from "./DashboardTable"
import FilterSelect from "./FilterSelect"
import SortSelect from "./SortSelect"

const DashboardContent = () => {
  return (
    <main className="pl-28 pr-5 py-5">
        <div className="flex items-center gap-3">
            <SortSelect />
            <FilterSelect />
        </div>
        <DashboardTable />
        <div className="flex justify-end">
            <div className="flex items-center gap-4">
                <button className="bg-slate-800 px-3 py-1 rounded transition hover:bg-slate-700 cursor-pointer">Previous</button>
                <p>Page <span>1</span> of <span>2</span></p>
                <button className="bg-slate-800 px-3 py-1 rounded transition hover:bg-slate-700 cursor-pointer">Next</button>
            </div>
        </div>
    </main>
  )
}

export default DashboardContent