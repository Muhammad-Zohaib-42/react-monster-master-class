import {motion} from "motion/react"

const images = [
  {
    src: "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww",
    author: "Dario Bronnimann"
  },
  {
    src: "https://images.unsplash.com/photo-1751225750479-43ad27b94fa0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww",
    author: "Emma Swobolda"
  },
  {
    src: "https://images.unsplash.com/photo-1759681770982-313332e7f42c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww",
    author: "Kristaps Ungurs"
  }
]

const parentVariants = {
  initial: {scale: 1},
  hover: {scale: 1.05}
}

const childVariants = {
  initial: {scale: 0},
  hover: {scale: 1}
}

const App = () => {
  return (
    <main className="h-screen bg-slate-900 text-slate-200 flex items-center justify-center gap-5">
      {
        images.map(({src, author}) => <motion.div variants={parentVariants} initial="initial" whileHover="hover" transition={{type:"spring",stiffness:300}} className="h-60 w-60 rounded-lg overflow-hidden relative">
          <img className="h-full w-full object-cover" src={src} alt="nature" />
          <motion.div variants={childVariants} transition={{type:"spring",stiffness:300}} className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h2 className="text-xl text-white">{author}</h2>
          </motion.div>
        </motion.div>)
      }
    </main>
  )
}

export default App