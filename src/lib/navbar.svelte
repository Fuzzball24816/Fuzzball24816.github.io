<nav>
  <a href="../">Home</a>
  <a href="../wizard">Wizard</a>
  <a href="../cats">Cats</a>
  <a href="../todo">To Do List</a>
  <a href="../wiki">Wikipedia Fetcher</a>
  <a href="../stoic">Stoic Quotes</a>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="menu-container">
    <div class="fake-link">Video Games</div>
    <div class="menu">
      <a href="../rimworld">Rimworld</a>
      <a href="../totalwar">Total War</a>
      <a href="../crusaderkings3">Crusader Kings III</a>
    </div>
  </div>
</nav>

<style>
  nav {
    font-size: 22px;
    padding: 5px 10px;
    display: flex;
    gap: 28px;
    margin: 10px 0;
    border-radius: 5px;
    background: #14171a;
    border: 1px solid #313131;
  }

  a,
  .fake-link {
    color: white;
    text-decoration: none;
    cursor: pointer;
  }

  .menu {
    padding: 8px;
    display: none;
    position: absolute;
    top: 40px;
    background-color: #14171a;
    border-radius: 5px;
    box-shadow: 0px 0px 16px 5px rgba(0, 0, 0, 0.2);
    border: 1px solid #313131;
    z-index: 1;
  }

  .menu-container:hover .menu,
  .menu:hover {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  a:hover {
    color: grey;
  }
</style>
