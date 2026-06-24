import KeywordItem from "./KeywordItem"

const KeywordsSection = () => {
  const keywords: string[] = ["APPLE", "WATCH", "FASHION", "TREND", "SHOES", "SHIRT"]

  return (
    <div>
        <h2 className="section-title mb-1">Keywords</h2>
        <ul className="section-list gap-1.5">
            {
                keywords.map(keyword => <KeywordItem key={keyword} keyword={keyword} />)
            }
        </ul>
    </div>
  )
}

export default KeywordsSection