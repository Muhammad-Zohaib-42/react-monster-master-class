import { useState, useTransition } from "react"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"

type Tabs = 'home' | 'about' | 'contact'

function App() {
  const [activeTab, setActiveTab] = useState<Tabs>('home')
  const [isPending, startTransition] = useTransition()

  function renderContent() {
    switch(activeTab) {
      case 'home':
        return <Home />
        break;
      case 'about':
        return <About />
        break;
      case 'contact':
        return <Contact />
      default: 
        return <Home />
    }
  }

  function handleClick(tab: Tabs) {
    startTransition(() => {
      setActiveTab(tab)
    })
  }

  return (
    <main>
      <section className="p-5">
        <div>
          <button className="px-3 py-1.5 rounded bg-gray-800 text-gray-200 cursor-pointer mr-3" onClick={() => handleClick('home')}>Home</button>
          <button className="px-3 py-1.5 rounded bg-gray-800 text-gray-200 cursor-pointer mr-3" onClick={() => handleClick('about')}>About</button>
          <button className="px-3 py-1.5 rounded bg-gray-800 text-gray-200 cursor-pointer mr-3" onClick={() => handleClick('contact')}>Contact</button>
        </div>
        <div className="bg-gray-50 p-3">
          {isPending ? <p>Loading...</p> : renderContent()}
        </div>
      </section>
    </main>
  )
}

export default App
