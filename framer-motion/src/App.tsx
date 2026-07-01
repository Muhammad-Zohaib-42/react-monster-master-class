import {motion} from "motion/react"

function App() {
  return (
    <main className="h-screen bg-slate-900 text-slate-200 grid place-content-center">
      <div className="flex items-center gap-2">
        {
          [...Array(3)].map((_,index) => <motion.div 
            className="w-10 h-10 bg-teal-300 rounded-full"
            key={index}
            animate= {{
              y: [0, -15, 0]
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: index * 0.2
            }}
          />)
        }
      </div>
    </main>
  )
}

export default App
