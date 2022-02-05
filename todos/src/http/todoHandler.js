import token from "@/stores/tokenStore.js";
import { get } from "svelte/store";

const getTodos = async () => {
  console.log("todoHandler, getTodos")
  const result = await fetch("http://localhost:4000/todos", {
    headers: {
      token: get(token)
    }
  });
  console.log(result);
  return result.json();
}

const addTodo = async (description) => {
  await fetch("http://localhost:4000/todos", {
    method: "POST",
    body: JSON.stringify({
      tehtava: description
    }),
    headers: {
      token: get(token)
    }
  });
}

const setFinished = async (id) => {
  await fetch(
    `http://localhost:4000/todos/${id}/finish`,
    {
      method: "POST"
    }
  );
}


export { addTodo, getTodos, setFinished };