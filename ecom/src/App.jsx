import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App