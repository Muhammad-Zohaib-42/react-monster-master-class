import React, { useContext } from 'react'
import { ShoesContext } from '../ShoesContext'

const Btn = ({text}) => {
  const {setShowData, data} = useContext(ShoesContext)

  function handleClick() {
    setShowData(text == "All Products" ? data : data.filter(shoe => shoe.brand.toLowerCase() == text.toLowerCase()))
  }

  return (
    <button onClick={handleClick} className='recommended-btn'>{text}</button>
  )
}

export default Btn