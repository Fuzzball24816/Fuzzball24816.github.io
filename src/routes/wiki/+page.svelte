<script>
  import Box from "$lib/box.svelte";
  import Loader from "$lib/loader.svelte";

  let htmlContent = "";
  let searchString;
  let resultsList = [];
  let loading = false;

  const clearData = () => {
    resultsList = [];
    htmlContent = "";
  };

  const getWiki = async () => {
    clearData();
    loading = true;
    const article = await getRandomWikiPage();
    htmlContent = `${article.extract_html}<img src="${article.thumbnail.source}"></img>`;
    loading = false;
  };

  const getRandomWikiPage = async () => {
    const url = "https://en.wikipedia.org/api/rest_v1/page/random/summary";
    const response = await fetch(url);
    return response.json();
  };

  const wikiSearch = async () => {
    if (searchString === undefined) {
      return;
    }

    clearData();
    loading = true;
    const apiResponse = await searchWiki(searchString);
    apiResponse[1].forEach((title, index) => {
      const newObject = {
        title: title,
        url: apiResponse[3][index],
      };

      resultsList = [...resultsList, newObject];
    });
    loading = false;
  };

  const searchWiki = async (query) => {
    const url = `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&format=json&search=${query}&namespace=0&limit=3&formatversion=2`;
    const response = await fetch(url);
    return response.json();
  };
</script>

<div class="wiki-container">
  <div class="controls">
    <button class="getWikiButton" on:click={getWiki} disabled={loading}>
      Get a random Wiki Page!
    </button>
    <br />
    <button on:click={wikiSearch} disabled={loading}>Search Wiki!</button>
    <input bind:value={searchString} class="wikiSearchInput" />
  </div>
  {#if loading || htmlContent || resultsList.length > 0}
    <div class="wikipedia">
      {#if loading}
        <Loader />
      {:else if htmlContent}
        <div class="wikipedia-html">
          {@html htmlContent}
        </div>
      {:else if resultsList.length > 0}
        <ul>
          {#each resultsList as result}
            <li>
              <a href={result.url}>{result.title}</a>
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  {/if}
</div>

<style>
  .wiki-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .controls {
    text-align: center;
  }

  .wikipedia {
    font-size: 25px;
    margin: 0 15%;
    background-color: rgb(63, 57, 57);
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
  }

  .wikipedia-html {
    display: flex;
    gap: 15px;
    justify-content: space-around;
  }

  .getWikiButton {
    margin-bottom: 10px;
    margin-top: 10px;
  }
</style>
