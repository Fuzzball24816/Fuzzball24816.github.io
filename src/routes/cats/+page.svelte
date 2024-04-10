<script>
  let paused = true;
</script>

<audio id="ragala" src="ragala.mp3" bind:paused></audio>
<button on:click={() => (paused = !paused)}>
  <img src="cat.webp" alt="cat" />
</button>

<style>
  button {
    border: none;
    padding: 0;
    margin: 0 auto;
    display: block;
  }

  img {
    display: block;
  }
</style>
