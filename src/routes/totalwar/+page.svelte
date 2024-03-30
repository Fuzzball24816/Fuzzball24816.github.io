<script>
  const arrayOfImages = [];
  for (let i = 1; i < 36; i++) {
    arrayOfImages.push(`shogun (${i}).jpg`);
  }
</script>

{#each arrayOfImages as image}
  <img img="shogun" src={image} alt="shogun" />
{/each}
