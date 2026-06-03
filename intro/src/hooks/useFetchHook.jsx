import { useEffect, useState } from "react";

const useFetchHook = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
      );
      const data = await response.json();

      if (data && data.length) setData(data);
    }

    fetchData();
  }, []);

  return [data]
};


export default useFetchHook