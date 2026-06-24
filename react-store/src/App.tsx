import { useContext } from "react"
import LeftSidebar from "./components/LeftSidebar"
import Main from "./components/Main"
import RightSidebar from "./components/RightSidebar"
import { StoreContext } from "./contexts/StoreContext"

function App() {
  const {setIsFilterMenuOpen} = useContext(StoreContext)!

  return (
    <div onClick={() => setIsFilterMenuOpen(false)} className="flex h-screen bg-slate-100 text-slate-700">
      <LeftSidebar />
      <Main />
      <RightSidebar />
    </div>
  )
}

export default App
