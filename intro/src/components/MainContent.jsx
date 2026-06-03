import React, { useContext } from 'react'
import WelcomeMessage from './WelcomeMessage'
import { AuthContext } from '../contexts/AuthContext'

const MainContent = () => {
  const {isAdmin} = useContext(AuthContext)

  if (isAdmin) {
    return (
      <main>
          <h1>Welcom Admin Dashboard</h1>
      </main>
    )
  }

  return (
    <main>
      <h1>Welcome User Dashboard</h1>
    </main>
  )
}

export default MainContent