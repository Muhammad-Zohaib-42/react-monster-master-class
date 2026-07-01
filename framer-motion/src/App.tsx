import {motion} from "motion/react"
import { useState } from "react"

const variants = {
  front: {rotateY: 0},
  back: {rotateY: 180}
}

function App() {
  const [isFlipped, setIsFlipped] = useState<boolean>(false)

  return (
    <main onClick={() => setIsFlipped(!isFlipped)} className="h-screen bg-slate-900 text-slate-200 grid place-content-center perspective-distant">
      <motion.div variants={variants} initial="front" animate={isFlipped ? "back" : "front"} transition={{duration:1, ease: "anticipate"}} className="relative h-70 w-60 transform-3d">
        <div className="absolute inset-0 text-xl flex items-center justify-center backface-hidden bg-slate-800 rounded-md">Front Side</div>
        <div className="absolute inset-0 text-xl flex items-center justify-center backface-hidden bg-slate-800 rounded-md rotate-y-180">Back Side</div>
      </motion.div>
    </main>
  )
}

export default App
