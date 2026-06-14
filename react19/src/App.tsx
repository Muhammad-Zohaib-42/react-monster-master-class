import Card from "./components/Card"

function App() {
  return (
    <main>
      <section className="h-screen grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 p-6">
        {
          Array.from({length: 10}).map(() => <Card />)
        }
      </section>
    </main>
  )
}

export default App
