const App = () => {
  const isLoggedIn = true
  const isAdmin = true

  return <>
     {isLoggedIn && isAdmin && <h1>Welcom Admin</h1>}
     {isLoggedIn && !isAdmin && <h1>Welcome user</h1>} 
  </>
}

export default App