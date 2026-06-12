import AdminInfo from "./components/AdminInfo"
import UserInfo from "./components/UserInfo"

function App() {
  return (
    <>
      <UserInfo username={'zohaib'} email={'zohaib@gmail.com'} password={'zohaib123'} />
      <AdminInfo username={'shoaib'} email={'shoaib@gmail.com'} password={'shoaib123'} role={'admin'} />
    </>
  )
}

export default App
