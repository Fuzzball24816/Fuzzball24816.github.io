<script>
  const wizard = () => {
    alert("I CAST TESTICULAR TORSION");
  };
</script>

<div class="container">
  <button on:click={wizard}
    ><img class="wizard" src="wizard.png" alt="wizard" />
  </button>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
  }
  .wizard {
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
