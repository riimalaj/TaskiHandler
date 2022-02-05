<script>
  import * as todoHandler from "@/http/todoHandler.js";
  export let item;

  const setDone = () => {
    item.finished = true;
    todoHandler.setFinished(item.id);
  }
</script>

<span on:click={setDone}>
  {#if item.finished}
    <del>{item.description}</del>
  {/if}
  {#if !item.finished}
    {item.description}
  {/if}
</span>

<style>
    span {
        color: red;
    }
</style>