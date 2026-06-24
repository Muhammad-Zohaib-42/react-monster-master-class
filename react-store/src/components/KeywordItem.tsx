type keywordItemProps = {
    keyword: string
}

const KeywordItem = ({keyword}: keywordItemProps) => {
  return (
    <li className="px-2 py-1 border border-slate-300 transition hover:bg-slate-200">
        <p>{keyword}</p>
    </li>
  )
}

export default KeywordItem