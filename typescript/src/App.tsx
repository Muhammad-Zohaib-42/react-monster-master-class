import Button from "./components/Button"
// import User from "./components/User"

function App() {
  function onClickHandler() {
    console.log("button is clicked successfully!")
  }

  return (
    <>
      {/* <User username="zohaib" email="zohaib@gmail.com" /> */}
      <Button label="Click Me!" onClickHandler={onClickHandler} disabled={false} />
    </>
  )
}

export default App
