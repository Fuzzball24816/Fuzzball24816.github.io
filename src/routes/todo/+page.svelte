<script>
  let todos = [
    { text: "todo 1", isEditing: false },
    { text: "todo 2", isEditing: false },
    { text: "todo 3", isEditing: false },
  ];

  let todoInput;

  const addTodo = () => {
    if (todoInput) {
      const newTodo = {
        text: todoInput,
        isEditing: false,
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
<form on:submit|preventDefault={addTodo}>
  <input bind:value={todoInput} />
  <button class="addElementButton">Add Element</button>
</form>
<button class="deleteAllButton" on:click={deleteAllTodos}>Delete All</button>

{#if todos.length > 0}
  <div class="todoContainer">
    {#each todos as todo, i}
      <div>
        {#if todo.isEditing}
          <input />
          <button on:click={() => saveTodo(i)}>Save</button>
        {:else}
          <span>{todo.text}</span>
          <button on:click={() => editTodo(i)}>Edit</button>
        {/if}
        <button on:click={() => deleteTodo(i)}> Delete </button>
      </div>
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
