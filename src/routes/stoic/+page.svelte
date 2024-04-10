<script>
  import Loader from "$lib/loader.svelte";

  let author = "";
  let quote = "";
  let loading = false;

  const stoicism = async () => {
    loading = true;
    const article = await getRandomStoicQuote();
    loading = false;

    author = article.author;
    quote = article.quote;
  };

  const getRandomStoicQuote = async () => {
    const url = "https://stoic.tekloon.net/stoic-quote";
    const response = await fetch(url);
    return response.json();
  };
</script>

<div class="container">
  <button class="random-button" on:click={stoicism} disabled={loading}>
    Get a random stoic quote!
  </button>

  {#if (author && quote) || loading}
    <div class="quoteBox">
      {#if loading}
        <Loader />
      {:else}
        <div>{quote}</div>
        <div>{author}</div>
      {/if}
    </div>
  {/if}
</div>

<style>
  .container {
    width: 80%;
    margin: 0 auto;
  }

  .random-button {
    margin: 0 auto;
    display: block;
  }

  .quoteBox {
    font-size: 25px;
    margin: 0 auto;
    width: fit-content;
    background-color: rgb(63, 57, 57);
    padding: 25px;
    margin-top: 25px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
</style>
