import Header from "./components/Header"
import Main from "./components/Main"
import Modal from "./components/Modal"

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Modal isOpen={false} />
    </>
  )
}

export default App