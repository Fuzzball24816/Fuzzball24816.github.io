<script>
  let todos = [];
  let todoInput;
</script>

<h1>Todo List</h1>
<input bind:value={todoInput} />
<button
  class="addElementButton"
  on:click={() => {
    if (todoInput) todos = [...todos, todoInput];
  }}>Add Element</button
>
<button class="deleteAllButton" on:click={() => (todos = [])}>
  Delete All
</button>

{#if todos.length > 0}
  <div class="todoBackground">
    {#each todos as todo, i}
      <div class="listElement">{todo}</div>
      <button
        class="deleteButton"
        on:click={() => (todos = [...todos.slice(0, i), ...todos.slice(i + 1)])}
        >Delete Button</button
      >
    {/each}
  </div>
{/if}

<style>
  .todoBackground {
    background-color: black;
    border-radius: 5px;
    text-align: center;
    padding: 15px;
  }

  h1 {
    text-align: center;
  }

  .addElementButton {
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .deleteAllButton {
    margin-bottom: 10px;
  }
</style>
