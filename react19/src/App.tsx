import { useState, useTransition } from "react"
import Html from "./components/Html"
import Css from "./components/Css"
import Javascript from "./components/Javascript"

type Tabs = 'html' | 'css' | 'javascript'

const App = () => {
  const [activeTab, setActiveTab] = useState('html')
  const [isPending, startTransition] = useTransition()

  function handleClick(tab: Tabs) {
    startTransition(() => {
      setActiveTab(tab)
    })
  }

  return (
    <main>
      <section className="p-5">
        <div className="flex gap-3">
          <button className={`px-5 py-1.5 rounded cursor-pointer transition ${activeTab == 'html' ? 'bg-gray-800 text-gray-200 hover:bg-gray-900' : 'bg-gray-200 text-gray-800 hover:bg-gray-100'}`} onClick={() => handleClick('html')}>html</button>
          <button className={`px-5 py-1.5 rounded cursor-pointer transition ${activeTab == 'css' ? 'bg-gray-800 text-gray-200 hover:bg-gray-900' : 'bg-gray-200 text-gray-800 hover:bg-gray-100'}`} onClick={() => handleClick('css')}>css</button>
          <button className={`px-5 py-1.5 rounded cursor-pointer transition ${activeTab == 'javascript' ? 'bg-gray-800 text-gray-200 hover:bg-gray-900' : 'bg-gray-200 text-gray-800 hover:bg-gray-100'}`} onClick={() => handleClick('javascript')}>javascript</button>
        </div>
        <div className="py-3">
          {
            isPending ? <p>Loading...</p> : activeTab == 'html' ? <Html /> : activeTab == 'css' ? <Css /> : <Javascript />
          }
        </div>
      </section>
    </main>
  )
}

export default App