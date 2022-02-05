<script>
  import todos from "@/stores/todoStore.js";
  import Todo from "@/components/Todo.svelte";
</script>

<h2>Tehtävät ({$todos.length})</h2>

<ul>
  {#each $todos as todo}
    <li>
      <Todo item={todo} />
    </li>
  {/each}
</ul>
