type keywordItemProps = {
    keyword: string
}

const KeywordItem = ({keyword}: keywordItemProps) => {
  return (
    <li className="">
        <button className="px-2 py-1 border border-slate-300 transition-all hover:bg-slate-200 w-full text-start">
          <p>{keyword}</p>
        </button>
    </li>
  )
}

export default KeywordItem