import NumPaginationBtn from "./NumPaginationBtn"

export type NumObj = {
    num: number,
    isActive: boolean
}

const NumPaginationBtnsWrapper = () => {
  const nums: NumObj[] = [{num: 1, isActive: true},{num: 2, isActive: false},{num: 3, isActive: false},{num: 4, isActive: false},{num: 5, isActive: false}]

  return (
    <div className="flex items-center gap-3">
        {
            nums.map(numObj => <NumPaginationBtn key={numObj.num} num={numObj.num} isActive={numObj.isActive} />)
        }
    </div>
  )
}

export default NumPaginationBtnsWrapper