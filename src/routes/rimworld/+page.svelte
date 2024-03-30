<script>
  import PlantCalculator from "./plantCalculator.svelte";
  import SkillCalculator from "./skillCalculator.svelte";
</script>

<div class="wrap">
  <div class="panel">
    <PlantCalculator />
    <SkillCalculator />
  </div>
</div>

<style>
  .wrap {
    width: 990px;
    margin: 0 auto;
  }

  .panel {
    text-align: center;
    margin: 0 auto;
    background-color: #14171a;
    border-style: solid;
    border-width: 1px;
    border-color: #313131;
    padding: 0 15px 15px 15px;
  }
</style>
