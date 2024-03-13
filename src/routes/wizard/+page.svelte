<script>
  const wizard = () => {
    alert("I CAST TESTICULAR TORSION");
  };
</script>

<button on:click={wizard}
  ><img class="wizard" src="wizard.png" alt="wizard" />
</button>

<style>
  .wizard {
    height: 800px;
    transition: transform 1s;
  }

  .wizard:hover {
    transform: scale(1.5);
  }

  button {
    border: none;
    padding: 0;
  }

  img {
    display: block;
  }
</style>
