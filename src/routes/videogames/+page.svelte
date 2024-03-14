<script>
  let numberOfColonists = 0;

  const calculateNutrition = () => {
    const nutritionRequiredPerDay = 1.6 * numberOfColonists;
    const mealOption = document.querySelector(
      'input[name="foodSelect"]:checked',
    ).value;
    plantCalc(nutritionRequiredPerDay, mealOption, "ricePlantsNeeded", 0.054);
    plantCalc(nutritionRequiredPerDay, mealOption, "cornPlantsNeeded", 0.0525);
    plantCalc(
      nutritionRequiredPerDay,
      mealOption,
      "potatoPlantsNeeded",
      0.0515,
    );
    plantCalc(nutritionRequiredPerDay, mealOption, "berryPlantsNeeded", 0.047);
    plantCalc(
      nutritionRequiredPerDay,
      mealOption,
      "fungusPlantsNeeded",
      0.0495,
    );
  };

  const plantCalc = (
    nutritionRequiredPerDay,
    mealOption,
    elementClass,
    plantNutritonPerPlantPerDay,
  ) => {
    const nutritionPerPlantAfterCooking =
      plantNutritonPerPlantPerDay * mealMultiplerMap[mealOption];
    const plantsNeeded =
      nutritionRequiredPerDay / nutritionPerPlantAfterCooking;
    const output = document.querySelector(`.${elementClass}`);
    output.innerHTML = Math.round(plantsNeeded);
  };

  const mealMultiplerMap = {
    raw: 1,
    paste: 3,
    simple: 1.8,
    fine: 1.8,
    lavish: 1,
  };

  const godFunction = () => {
    updateConstruction();
    updateCooking();
    updateMining();
    updatePlants();
    updateAnimals();
    updateMedical();
    updateForage();
    updateOperationSpeed();
  };

  let contructionSkill = 0;
  let manipulation = 100;
  let constructionSpeed = 30;
  let cookingSkill = 0;
  let cookingSpeed = 40;
  let miningSkill = 0;
  let plantsSkill = 0;
  let forageAmount = 0;
  let globalWorkSpeed = 100;
  let wildness = 50;
  let animalSkill = 0;
  let animalTameChance = 0;
  let medicalSkill = 0;
  let medicalSpeed = 40;
  let operationSpeed = 40;

  const updateConstruction = () => {
    let newConstructionSpeed = 0.3 + 0.0875 * contructionSkill;
    let manipulationDecimal = manipulation / 100;

    newConstructionSpeed = newConstructionSpeed * manipulationDecimal;

    newConstructionSpeed = applyGlobalWorkSpeed(newConstructionSpeed);

    constructionSpeed = (newConstructionSpeed * 100).toFixed(0);
  };

  const updateCooking = () => {
    const manipulationScore = manipulation / 6.25 - 16;

    const finalScore = cookingSkill + manipulationScore;
    let cookingMultiplier;
    if (finalScore < -20) {
      cookingMultiplier = 0.1;
    } else if (finalScore >= -20 && finalScore < 0) {
      cookingMultiplier = 0.4 + finalScore * 0.015;
    } else if (finalScore === 0) {
      cookingMultiplier = 0.4;
    } else if (finalScore <= 20 && finalScore > 0) {
      cookingMultiplier = 0.4 + finalScore * 0.06;
    } else if (finalScore > 20) {
      cookingMultiplier = 1.6;
    }

    cookingMultiplier = applyGlobalWorkSpeed(cookingMultiplier);
    cookingSpeed = (cookingMultiplier * 100).toFixed(0);
  };

  const updateMining = () => {
    let miningMultiplier = 0.04 + 0.12 * miningSkill;

    const manipulationPercent = manipulation / 100;

    miningMultiplier = miningMultiplier * manipulationPercent;

    miningMultiplier = applyGlobalWorkSpeed(miningMultiplier);

    const miningSpeedElement = document.getElementById("miningSpeed");
    miningSpeedElement.innerText = (miningMultiplier * 100).toFixed(0);
  };

  const updatePlants = () => {
    let plantsSpeed = 0.08 + 0.115 * plantsSkill;

    const manipulationPercent = manipulation / 100;

    plantsSpeed = plantsSpeed * manipulationPercent;

    plantsSpeed = applyGlobalWorkSpeed(plantsSpeed);

    if (plantsSpeed < 0.1) {
      plantsSpeed = 0.1;
    }

    plantsSpeed = (plantsSpeed * 100).toFixed(0);
  };

  const updateForage = () => {
    let forageEfficiency = 0.09 * plantsSkill;

    const manipulationPercent = manipulation / 100;

    forageEfficiency -= (1 - manipulationPercent) / 2;

    forageEfficiency = applyGlobalWorkSpeed(forageEfficiency);

    forageAmount = (forageEfficiency * 100).toFixed(0);
  };

  const applyGlobalWorkSpeed = (speed) => {
    return speed * (globalWorkSpeed / 100);
  };

  const applyWildness = (tameChance) => {
    const newWildness = wildness / 100;

    if (newWildness == 1) tameChance = 0;
    else if (newWildness > 0.5) {
      tameChance = (tameChance / 2) * (1 / newWildness);
    } else if (newWildness < 0.5) {
      tameChance = tameChance * (2 - newWildness * 2);
    }

    return tameChance;
  };

  const updateAnimals = () => {
    let newAnimalTameChance = 0.04 + 0.03 * animalSkill;

    const manipulationPercent = manipulation / 100;

    if (manipulationPercent < 0.8) {
      newAnimalTameChance -= (0.8 - manipulationPercent) * 0.5;
    }

    newAnimalTameChance = applyWildness(newAnimalTameChance);

    animalTameChance = (newAnimalTameChance * 100).toFixed(0);
  };

  const updateMedical = () => {
    const medicalSkill = Number(document.getElementById("medicalInput").value);
    let medicalMultiplier = 0.4 + 0.06 * medicalSkill;

    const manipulationPercent = manipulation / 100;

    medicalMultiplier -= (1 - manipulationPercent) * 1;

    medicalMultiplier = applyGlobalWorkSpeed(medicalMultiplier);

    const medicalSpeedElement = document.getElementById("medicalSpeed");
    medicalSpeedElement.innerText = (medicalMultiplier * 100).toFixed(0);
  };

  const updateOperationSpeed = () => {
    const medicalSkill = Number(document.getElementById("medicalInput").value);
    let medicalMultiplier = 0.4 + 0.06 * medicalSkill;

    const manipulationPercent = manipulation / 100;

    medicalMultiplier -= (1 - manipulationPercent) * 1;

    medicalMultiplier = applyGlobalWorkSpeed(medicalMultiplier);

    const medicalOperationSpeedElement = document.getElementById(
      "medicalOperationSpeed",
    );
    medicalOperationSpeedElement.innerText = (medicalMultiplier * 100).toFixed(
      0,
    );
  };
</script>

<div class="wrap">
  <div class="panel">
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
        type="radio"
        id="rawOption"
        name="foodSelect"
        value="raw"
        checked="true"
      />
      <label for="rawOption">Raw</label>

      <input
        type="radio"
        id="pasteOption"
        name="foodSelect"
        value="paste"
        on:change={calculateNutrition}
      />
      <label for="pasteOption">Paste</label>

      <input
        type="radio"
        id="lavishOption"
        name="foodSelect"
        value="lavish"
        on:change={calculateNutrition}
      />
      <label for="lavishOption">Lavish</label>

      <input
        on:change={calculateNutrition}
        type="radio"
        id="simpleMealOption"
        name="foodSelect"
        value="simple"
      />
      <label for="simpleMealOption">Simple Meal</label>

      <input
        on:change={calculateNutrition}
        type="radio"
        id="fineMealOption"
        name="foodSelect"
        value="fine"
      />
      <label for="fineMealOption">Fine Meal</label>
    </div>
    <div class="mb rimworld-subheader">Number of plants needed</div>
    <div class="mb">
      Rice Plants:
      <span class="ricePlantsNeeded">0</span> Corn Plants:
      <span class="cornPlantsNeeded">0</span> Potato Plants:
      <span class="potatoPlantsNeeded">0</span> Berry Plants:
      <span class="berryPlantsNeeded">0</span> Fungus Plants:
      <span class="fungusPlantsNeeded">0</span>
    </div>

    <!-- Start of the skill calculator -->
    <div class="mb rimworld-header">Skill Calculator</div>

    <div class="mb rimworld-subheader">Skills</div>
    <div class="skillInputs">
      <div>
        <label for="animalInput">Animals</label>
        <input
          on:change={godFunction}
          max="20"
          min="0"
          bind:value={animalSkill}
          id="animalInput"
        />
      </div>
      <div>
        <span>Construction</span>
        <input
          on:change={godFunction}
          max="20"
          min="0"
          type="number"
          bind:value={contructionSkill}
        />
      </div>
      <div>
        <span>Cooking</span>
        <input
          on:change={godFunction}
          max="20"
          min="0"
          type="number"
          bind:value={cookingSkill}
        />
      </div>
      <div>
        <label for="craftingInput">Crafting</label>
        <input
          on:change={godFunction}
          max="20"
          min="0"
          value="0"
          type="number"
          id="craftingInput"
        />
      </div>
      <div>
        <label for="medicalInput">Medical</label>
        <input
          on:change={godFunction}
          max="20"
          min="0"
          type="number"
          bind:value={medicalSkill}
          id="medicalInput"
        />
      </div>
      <div>
        <label for="miningInput">Mining</label>
        <input
          on:change={godFunction}
          max="20"
          min="0"
          type="number"
          bind:value={miningSkill}
          id="miningInput"
        />
      </div>
      <div>
        <label for="meleeInput">Melee</label>
        <input
          on:change={godFunction}
          max="20"
          min="0"
          value="0"
          type="number"
          id="meleeInput"
        />
      </div>
      <div>
        <label for="intellectualInput">Intellectual</label>
        <input
          on:change={godFunction}
          max="20"
          min="0"
          value="0"
          type="number"
          id="intellectualInput"
        />
      </div>
      <div>
        <span>Plants</span>
        <input
          on:change={godFunction}
          max="20"
          min="0"
          type="number"
          bind:value={plantsSkill}
        />
      </div>
      <div>
        <label for="artisticInput">Artistic</label>
        <input
          on:change={godFunction}
          max="20"
          min="0"
          value="0"
          type="number"
          id="artisticInput"
        />
      </div>
      <div>
        <span>Shooting</span>
        <input
          on:change={godFunction}
          max="20"
          min="0"
          value="0"
          type="number"
        />
      </div>
      <div>
        <span>Social</span>
        <input
          on:change={godFunction}
          max="20"
          min="0"
          value="0"
          type="number"
        />
      </div>
    </div>

    <div class="mb rimworld-subheader">Properties</div>
    <div class="propertyInputs">
      <div>
        <span>Global Work Speed</span>
        <input on:change={godFunction} min="30" bind:value={globalWorkSpeed} />
      </div>
      <div>
        <span>Manipulation</span>
        <input
          on:change={godFunction}
          min="0"
          type="number"
          bind:value={manipulation}
        />
      </div>
    </div>

    <div class="mb rimworld-subheader">Stats</div>
    <div class="statsOutputs">
      <div>
        <span>Construction speed:</span>
        <span>{constructionSpeed}</span><span>%</span>
      </div>

      <div>
        <span>Cooking speed:</span>
        <span>{cookingSpeed}</span><span>%</span>
      </div>

      <div>
        <span>Mining speed:</span>
        <span id="miningSpeed">4</span><span>%</span>
      </div>

      <div>
        <span>Medical Operation Speed:</span>
        <span>{operationSpeed}</span><span>%</span>
      </div>

      <div>
        <span>Plant speed:</span>
        <span id="plantsSpeed">10</span><span>%</span>
      </div>

      <div>
        <span>Medical speed:</span>
        <span>{medicalSpeed}</span><span>%</span>
      </div>

      <div>
        <span>Forage Amount:</span>
        <span>{forageAmount}</span><span>%</span>
      </div>

      <div>
        <span>Tame Chance:</span>
        <span>{animalTameChance}</span><span>% </span>
        <span>(Wildness %</span>
        <input
          on:change={godFunction}
          id="wildness"
          min="0"
          bind:value={wildness}
          max="100"
        />)
      </div>
    </div>
  </div>
</div>

<style>
  .wrap {
    width: 990px;
    margin: 0 auto;
  }

  .mb {
    margin-bottom: 15px;
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
    width: 860px;
    margin-left: auto;
    margin-right: auto;
  }

  .rimworld-subheader {
    background-color: #515b42;
    border-style: solid;
    border-width: 1px;
    border-color: #060606;
    width: 410px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    box-shadow: 0px 0px 6px 1px #5c7f8b;
  }

  .skillInputs {
    display: flex;
    margin-bottom: 15px;
  }

  .skillInputs input {
    width: 40px;
  }

  .propertyInputs {
    display: flex;
    margin-bottom: 15px;
    gap: 10px;
  }

  .propertyInputs input {
    width: 40px;
  }

  .statsOutputs {
    text-align: start;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  #wildness {
    height: 13px;
    width: 40px;
  }
</style>
