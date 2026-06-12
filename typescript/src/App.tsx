import AdminInfo from "./components/AdminInfo"
import UserInfo from "./components/UserInfo"

function App() {
  const user = {
    id: 1,
    username: "zohaib",
    email: "zohaib@gmail.com"
  }

  const admin = {
    id: 2,
    username: "shoaib",
    email: "shoaib@gmail.com",
    role: "admin"
  }

  return (
    <>
      <UserInfo user={user} />
      <AdminInfo admin={admin} />      
    </>
  )
}

export default App
