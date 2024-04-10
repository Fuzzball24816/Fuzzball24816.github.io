<script>
  const test = () => {
    alert("Dew it");
  };
</script>

<h1>Nick and Jerry's FAN SITE</h1>
<div>This is our websites with all of our interests!</div>
<marquee direction="right" scrollamount="5">
  <img on:click={test} src="star-d.png" alt="star destroyer" />
</marquee>
<audio class="imp-march" controls src="imp-march.mp4"></audio>

<style>
  h1,
  div {
    text-align: center;
  }

  .imp-march {
    margin: 100px auto;
    display: block;
  }
</style>
