import { use } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const Card = () => {
  const {theme, toggleTheme} = use(ThemeContext)

  return (
    <div className={`border border-gray-500 rounded p-5 ${theme == 'light' ? "bg-gray-100 text-gray-800" : "bg-gray-900 text-gray-200"}`}>
        <h1 className="text-xl font-semibold">TypeScript</h1>
        <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptates quisquam cumque laboriosam sunt asperiores modi dolorum quia, omnis itaque numquam aut, obcaecati dolor reprehenderit temporibus debitis? Asperiores, maiores eveniet!</p>
        <button onClick={toggleTheme} className="border outline-none bg-gray-800 text-gray-200 py-1.5 px-3 rounded mt-2 cursor-pointer">Toggle Card Theme</button>
    </div>
  )
}

export default Card