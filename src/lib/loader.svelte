<div class="loader"></div>

<style>
  .loader {
    width: 50px;
    aspect-ratio: 1;
    display: flex;
    filter: drop-shadow(0px 0px 1px #8d847f);
    animation: l3 1s infinite alternate linear;
  }

  .loader:before {
    content: "";
    flex: 1;
    background: #8d847f;
    border-radius: 50%;
    -webkit-mask: radial-gradient(
      circle closest-side at 66% 40%,
      #0000 115%,
      #000 118%
    );
  }

  @keyframes l3 {
    100% {
      filter: drop-shadow(0px 0px 20px #8d847f);
    }
  }
</style>
