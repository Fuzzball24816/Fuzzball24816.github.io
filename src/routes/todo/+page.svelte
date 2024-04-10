<script>
  let todos = [
    { text: "todo 1", isEditing: false, completed: false },
    { text: "todo 2", isEditing: false, completed: false },
    { text: "todo 3", isEditing: false, completed: false },
    { text: "done", isEditing: false, completed: true },
  ];

  let todoInput;

  const addTodo = () => {
    if (todoInput) {
      const newTodo = {
        text: todoInput,
        isEditing: false,
        completed: false,
      };

      todos = [...todos, newTodo];
    }
  };

  const deleteTodo = (indexToDelete) => {
    todos = [
      ...todos.slice(0, indexToDelete),
      ...todos.slice(indexToDelete + 1),
    ];
  };

  const toggleTodo = (indexToEdit) => {
    todos[indexToEdit].isEditing = !todos[indexToEdit].isEditing;
  };

  const deleteAllTodos = () => {
    todos = [];
  };
</script>

<div class="todoPage">
  <h1>Todo List</h1>
  <form on:submit={addTodo}>
    <input bind:value={todoInput} />
    <button>Add Todo</button>
    <button on:click|preventDefault={deleteAllTodos}>Delete All</button>
  </form>

  {#if todos.length > 0}
    <div class="todoContainer">
      <h2>Todos</h2>
      {#each todos as todo, index}
        {#if todo.completed === false}
          <div>
            <input type="checkbox" bind:checked={todo.completed} />
            {#if todo.isEditing}
              <input bind:value={todo.text} />
              <button on:click={() => toggleTodo(index)}>Save</button>
            {:else}
              <span>{todo.text}</span>
              <button on:click={() => toggleTodo(index)}>Edit</button>
            {/if}
            <button on:click={() => deleteTodo(index)}> Delete </button>
          </div>
        {/if}
      {/each}
    </div>
  {/if}

  <!-- Completed Todos  -->
  {#if todos.length > 0}
    <div class="todoContainer">
      <h2>Completed Todos</h2>
      {#each todos as todo, index}
        {#if todo.completed}
          <div>
            <input type="checkbox" bind:checked={todo.completed} />
            {#if todo.isEditing}
              <input bind:value={todo.text} />
              <button on:click={() => toggleTodo(index)}>Save</button>
            {:else}
              <span>{todo.text}</span>
              <button on:click={() => toggleTodo(index)}>Edit</button>
            {/if}
            <button on:click={() => deleteTodo(index)}> Delete </button>
          </div>
        {/if}
      {/each}
    </div>
  {/if}
</div>

<style>
  .todoPage {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 0 auto;
    width: fit-content;
  }

  .todoContainer {
    background-color: #0000009c;
    border-radius: 5px;
    text-align: center;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  h1,
  form {
    text-align: center;
  }
</style>
