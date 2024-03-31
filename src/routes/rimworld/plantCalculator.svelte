<script>
  let numberOfColonists = 0;
  let mealOption = "raw";

  const calculateNutrition = () => {
    const nutritionRequiredPerDay = 1.6 * numberOfColonists;

    const nutritionPerRicePlantAfterCooking =
      0.054 * mealMultiplerMap[mealOption];
    const riceplants =
      nutritionRequiredPerDay / nutritionPerRicePlantAfterCooking;
    ricePlantsNeeded = Math.round(riceplants);

    const nutritionPerCornPlantAfterCooking =
      0.0525 * mealMultiplerMap[mealOption];
    const cornPlants =
      nutritionRequiredPerDay / nutritionPerCornPlantAfterCooking;
    cornPlantsNeeded = Math.round(cornPlants);

    const nutritionPerPotatoPlantAfterCooking =
      0.0515 * mealMultiplerMap[mealOption];
    const potatoPlants =
      nutritionRequiredPerDay / nutritionPerPotatoPlantAfterCooking;
    potatoPlantsNeeded = Math.round(potatoPlants);

    const nutritionPerBerryPlantsAfterCooking =
      0.047 * mealMultiplerMap[mealOption];
    const berryPlants =
      nutritionRequiredPerDay / nutritionPerBerryPlantsAfterCooking;
    berryPlantsNeeded = Math.round(berryPlants);

    const nutritionPerFungusPlantAfterCooking =
      0.0495 * mealMultiplerMap[mealOption];
    const fungusplants =
      nutritionRequiredPerDay / nutritionPerFungusPlantAfterCooking;
    fungusPlantsNeeded = Math.round(fungusplants);
  };

  const mealMultiplerMap = {
    raw: 1,
    paste: 3,
    simple: 1.8,
    fine: 1.8,
    lavish: 1,
  };

  let ricePlantsNeeded = 0;
  let cornPlantsNeeded = 0;
  let potatoPlantsNeeded = 0;
  let berryPlantsNeeded = 0;
  let fungusPlantsNeeded = 0;
</script>

<h1 class="mb">
  Here is the most useful information we have found from Rimworld!
</h1>
<div class="mb rimworld-header">Rimworld Plant Meal Calculator</div>
<div class="mb">
  Number of Colonists:
  <input
    type="number"
    bind:value={numberOfColonists}
    on:change={calculateNutrition}
  />
  <input
    on:change={calculateNutrition}
    bind:group={mealOption}
    type="radio"
    value="raw"
  />
  <span>Raw</span>

  <input
    type="radio"
    bind:group={mealOption}
    value="paste"
    on:change={calculateNutrition}
  />
  <span>Paste</span>

  <input
    type="radio"
    bind:group={mealOption}
    value="lavish"
    on:change={calculateNutrition}
  />
  <span>Lavish</span>

  <input
    on:change={calculateNutrition}
    bind:group={mealOption}
    type="radio"
    value="simple"
  />
  <span>Simple Meal</span>

  <input
    on:change={calculateNutrition}
    bind:group={mealOption}
    type="radio"
    value="fine"
  />
  <span>Fine Meal</span>
</div>
<div class="mb rimworld-subheader">Number of plants needed</div>
<div class="mb">
  Rice Plants:
  <span>{ricePlantsNeeded}</span> Corn Plants:
  <span>{cornPlantsNeeded}</span> Potato Plants:
  <span>{potatoPlantsNeeded}</span> Berry Plants:
  <span>{berryPlantsNeeded}</span> Fungus Plants:
  <span>{fungusPlantsNeeded}</span>
</div>

<style>
  .mb {
    margin-bottom: 15px;
  }
  h1 {
    text-align: center;
  }

  .rimworld-header {
    background-color: #855b35;
    border-style: solid;
    border-width: 1px;
    border-color: #060606;
    font-size: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 6px 3px #5c7f8b;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }

  .rimworld-subheader {
    background-color: #515b42;
    border-style: solid;
    border-width: 1px;
    border-color: #060606;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    box-shadow: 0px 0px 6px 1px #5c7f8b;
  }
</style>
