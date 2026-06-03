import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext.jsx'

const Header = () => {
  const {isAdmin, setIsAdmin} = useContext(AuthContext)

  return (
    <header>
        <h1>Welcome to My Website</h1>
        <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
        <button onClick={() => setIsAdmin(!isAdmin)}>{isAdmin ? "Welcom Admin" : "Welcom User"}</button>
    </header>
  )
}

export default Header