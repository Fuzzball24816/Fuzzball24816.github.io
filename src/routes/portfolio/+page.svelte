<script>
</script>

<div class="textbox">
  <div class="section">
    <div class="title">&lt;Experience&gt;</div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </div>
  </div>

  <div class="section">
    <div class="title">&lt;Skills&gt;</div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </div>
  </div>
  <div class="section">
    <div class="title">&lt;Contact&gt;</div>
    <div>
      <span class="green">Lorem ipsum dolor Jerry</span> sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.
    </div>
    <a href="../contact" class="link">Contact me here</a>
  </div>
</div>

<style>
  .textbox {
    display: flex;
    font-size: large;
    width: 50%;
    gap: 20px;
    flex-direction: column;
    text-align: center;
  }

  .section {
    color: white;
  }

  .title {
    font-size: 75px;
    color: rgb(105, 180, 105);
    padding: 10px;
  }

  .yellow {
    color: yellow;
  }

  .green {
    color: lightgreen;
    background-color: transparent;
  }

  .link {
    color: gold;
    background-color: transparent;
    text-decoration: none;
  }

  .blink {
    animation: blink-animation 0.05s steps(2, start) infinite;
  }
  @keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }
</style>
