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
    color: white;
    background-color: #252526;
  }
</style>
