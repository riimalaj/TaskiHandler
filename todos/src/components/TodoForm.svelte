<script>
  import todos from "@/stores/todoStore.js";
  import * as todoHandler from "@/http/todoHandler.js";
  const addTask = async () => {
    let tehtava = document.getElementById("tehtava").value;

    await todoHandler.addTodo(tehtava);
    $todos = await todoHandler.getTodos();
    document.getElementById("tehtava").value = "";
  };
</script>

<h2>Lisää tehtävä</h2>
<input type="text" id="tehtava" />

<button on:click={addTask}>Lisää</button>