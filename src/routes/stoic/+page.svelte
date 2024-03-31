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

<button class="mtop" on:click={stoicism} disabled={loading}>
  Get a random stoic quote!
</button>

{#if (author && quote) || loading}
  <div class="quoteBox">
    {#if loading}
      <Loader />
    {:else}
      {author}
      <div>{quote}</div>
    {/if}
  </div>
{/if}

<style>
  .quoteBox {
    font-size: 25px;
    margin: 0 15%;
    background-color: rgb(63, 57, 57);
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 5px;
  }

  .mtop {
    margin-top: 10px;
  }
</style>
