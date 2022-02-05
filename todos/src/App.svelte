<script>
  import { onMount } from "svelte";
  import todos from "@/stores/todoStore.js";
  import * as todoHandler from "@/http/todoHandler.js";
  import MoreTodos from "@/components/MoreTodos.svelte";
  import TodoForm from "@/components/TodoForm.svelte";

  import UserToken from "@/components/UserToken.svelte";

  onMount(async () => {
    $todos = await todoHandler.getTodos();
  });
</script>

<UserToken />
<MoreTodos />
<TodoForm />
