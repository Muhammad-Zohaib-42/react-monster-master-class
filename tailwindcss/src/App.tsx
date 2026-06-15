import { Suspense } from "react"
import FetchData from "./components/ui/FetchData"
import Counter from "./components/Counter.tsx"

const App = () => {
  return (
    <Suspense>
      <FetchData />
      <Counter />
    </Suspense>
  )
}

export default App