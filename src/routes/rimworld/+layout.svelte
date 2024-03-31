<script>
  import Navbar from "$lib/navbar.svelte";
  import { backgroundUrl } from "$lib/background.js";
</script>

<div class="root">
  <Navbar />
  <slot />
</div>

<style>
  :global(*) {
    margin: 0;
  }

  :global(html, body) {
    height: 100%;
    background-color: black;
  }

  .root {
    background-image: url("/rimworld.jpg");
    height: 100%;
    display: flex;
    flex-direction: column; 
    align-items: center;
    color: white;
    background-repeat: no-repeat;
    background-color: black;
    background-position: top center;
  }
</style>
