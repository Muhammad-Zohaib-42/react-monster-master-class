import { useContext } from "react"
import { StoreContext } from "../contexts/StoreContext"

type keywordItemProps = {
    keywordText: string
}

const KeywordItem = ({keywordText}: keywordItemProps) => {
  const {setKeyword, keyword} = useContext(StoreContext)!

  return (
    <li>
        <button onClick={() => setKeyword(keywordText)} className={`px-2 py-1 border transition-all w-full text-start ${keyword == keywordText ? "bg-slate-100 border-slate-100" : "hover:bg-slate-200 border-slate-300"}`}>
          <p>{keywordText}</p>
        </button>
    </li>
  )
}

export default KeywordItem