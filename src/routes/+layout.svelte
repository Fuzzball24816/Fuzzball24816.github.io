<script>
  import Navbar from "../lib/navbar.svelte";
</script>

<Navbar />
<slot />

<style>
  :global(*) {
    margin: 0;
  }

  :global(body) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: white;
    background-repeat: no-repeat;
    background-color: #252526;
    background-position: top center;
  }
</style>
