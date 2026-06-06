import { useContext, useState } from "react"
import { ShoesContext } from "../ShoesContext"

const ChoiceBox = ({title, radioBtns}) => {
  const {data, setShowData, showData} = useContext(ShoesContext)

  function handleChange(radioBtn) {
    setShowData(radioBtn == "All" ? data : data.filter(obj => {
        if (title.toLowerCase() == "category" && obj.category.toLowerCase() == radioBtn.toLowerCase()) return obj
        else if (title.toLowerCase() == "colors" && obj.color.toLowerCase() == radioBtn.toLowerCase()) return obj
    }))
  }

  return (
    <div className="choice-box">
        <h4 className="title">{title}</h4>
        <ul>
            {
                radioBtns.map(radioBtn => (
                    <li key={radioBtn}>
                        <input onChange={() => handleChange(radioBtn)} type="radio" id={title !== 'Category' ? `${radioBtn.toLowerCase()}-${title.toLowerCase()}` : radioBtn.toLowerCase()} name={title.toLowerCase()} />
                        <label htmlFor={title !== 'Category' ? `${radioBtn.toLowerCase()}-${title.toLowerCase()}` : radioBtn.toLowerCase()}>{radioBtn}</label>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default ChoiceBox