import { Suspense } from "react"
import FetchData from "./components/ui/FetchData"

const App = () => {
  return (
    <Suspense>
      <FetchData />
    </Suspense>
  )
}

export default App