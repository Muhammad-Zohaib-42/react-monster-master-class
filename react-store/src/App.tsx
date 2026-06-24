import LeftSidebar from "./components/LeftSidebar"
import Main from "./components/Main"
import RightSidebar from "./components/RightSidebar"

function App() {
  return (
    <div className="flex h-screen">
      <LeftSidebar />
      <Main />
      <RightSidebar />
    </div>
  )
}

export default App
