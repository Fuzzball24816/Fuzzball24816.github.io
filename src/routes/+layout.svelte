<script>
  import Navbar from "../lib/navbar.svelte";
</script>

<Navbar />
<slot />

<style>
  /* @import "$lib/css-reset.css"; */

  :global(*) {
    margin: 0;
  }

  :global(body) {
    background-image: url("/rimworld.jpg");
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: white;
    background-repeat: no-repeat;
    background-color: black;
    background-position: top center;
  }
</style>
