import { useState, type FormEvent } from "react";

interface Task {
  id: number;
  task: string;
  completed: boolean;
}

const Todo = () => {
  const [tasksData, setTasksData] = useState<Task[]>([]);
  const [taskValue, setTaskValue] = useState<string>("");

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (taskValue) {
      const newTask: Task = {
        id: Date.now(),
        task: taskValue,
        completed: false,
      };

      setTasksData((prev) => [...prev, newTask]);
      setTaskValue('')
    }
  }

  return (
    <div>
      <h1>Manage Your Daily Tasks Here</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
        />
        <button>Add Task</button>
      </form>
      <ul>
        {tasksData.map((taskData) => (
          <li key={taskData.id}>{taskData.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
