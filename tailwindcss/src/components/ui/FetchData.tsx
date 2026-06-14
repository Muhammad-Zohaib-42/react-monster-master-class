import { use } from "react"

async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    return response.json()
}

const FetchData = () => {
    const data = use(fetchData())

    console.log(data)

  return (
    <div>{data.title}</div>
  )
}

export default FetchData