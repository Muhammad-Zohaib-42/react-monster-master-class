import React, { useEffect, useState } from 'react'

const App = () => {
  const [tasksData, setTasksData] = useState(() => {
    const tasks = localStorage.getItem("tasks")
    return tasks ? JSON.parse(tasks) : []
  })
  const [task, setTask] = useState("")

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksData))
  }, [tasksData])

  function handleSubmit(e) {
    e.preventDefault()

    if (!task) alert("task field is required!")

    const newTask = {
      id: Date.now(),
      task
    }

    setTasksData(prev => [...prev, newTask])
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter task' value={task} onChange={e => setTask(e.target.value)} />
        <button>Add Task</button>
      </form>
      <section>
        {
          tasksData.length < 1 ? <h1>No Tasks Yet</h1> : <ul>
            {
              tasksData.map(taskData => (<li key={taskData.id}>{taskData.task}</li>))
            }
          </ul>
        }
      </section>
    </main>
  )
}

export default App