import { useEffect, useState } from "react";

type TodoData = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const App = () => {
  const [todoData, setTodoData] = useState<TodoData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1",
        );

        if (!response.ok) {
          console.log("response is not ok")
        }

        const data: TodoData = await response.json()
        setTodoData(data)
      } catch (error) {
        console.log(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <main className="h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Loading Data...</h1>
      </main>
    );
  }

  return (
    <main className="h-screen flex flex-col gap-2 items-center justify-center">
      <h1 className="text-2xl font-bold">Todos</h1>
      <hr className="shrink-0 border-t h-1" />
      <p>{todoData?.title}</p>
      <hr className="shrink-0 border-t h-1" />
    </main>
  );
};

export default App;
