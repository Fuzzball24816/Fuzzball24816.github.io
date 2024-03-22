<script>
  let todos = [
    { text: "todo 1", isEditing: false, completed: false },
    { text: "todo 2", isEditing: false, completed: false },
    { text: "todo 3", isEditing: false, completed: false },
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

  const editTodo = (indexToEdit) => {
    todos[indexToEdit].isEditing = true;
  };

  const saveTodo = (indexToSave) => {
    todos[indexToSave].isEditing = false;
  };

  const deleteAllTodos = () => {
    todos = [];
  };
</script>

<h1>Todo List</h1>
<form on:submit={addTodo}>
  <input bind:value={todoInput} />
  <button class="addElementButton">Add Todo</button>
</form>
<button class="deleteAllButton" on:click={deleteAllTodos}>Delete All</button>

{#if todos.length > 0}
  <div class="todoContainer">
    {#each todos as todo, index}
      {#if todo.completed === false}
        <div>
          <input type="checkbox" bind:checked={todo.completed} />
          {#if todo.isEditing}
            <input bind:value={todo.text} />
            <button on:click={() => saveTodo(index)}>Save</button>
          {:else}
            <span>{todo.text}</span>
            <button on:click={() => editTodo(index)}>Edit</button>
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
    {#each todos as todo, index}
      {#if todo.completed}
        <div>
          <input type="checkbox" bind:checked={todo.completed} />
          {#if todo.isEditing}
            <input bind:value={todo.text} />
            <button on:click={() => saveTodo(index)}>Save</button>
          {:else}
            <span>{todo.text}</span>
            <button on:click={() => editTodo(index)}>Edit</button>
          {/if}
          <button on:click={() => deleteTodo(index)}> Delete </button>
        </div>
      {/if}
    {/each}
  </div>
{/if}

<style>
  .todoContainer {
    background-color: #0000009c;
    border-radius: 5px;
    text-align: center;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
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
