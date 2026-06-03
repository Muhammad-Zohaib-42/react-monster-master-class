import React, { useContext } from 'react'
import { AuthContext } from './contexts/AuthContext.jsx'
import Header from './components/Header'
import MainContent from './components/MainContent.jsx'

const App = () => {
  const {isAdmin, setIsAdmin} = useContext(AuthContext)

  return (
    <>
      <Header />
      <MainContent />
    </>
  )
}

export default App