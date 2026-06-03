import React, { useEffect, useState } from 'react'
import useFetchHook from './hooks/useFetchHook'

const App = () => {
  const [data] = useFetchHook('https://jsonplaceholder.typicode.com/todos')

  return (
    <div>
      {
        data && data.map(item => <p key={item.id}>{item.title}</p>)
      }
    </div>
  )
}

export default App