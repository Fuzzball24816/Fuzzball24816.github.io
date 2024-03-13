<script>
  const calculateNutrition = () => {
    const numberOfColonists = document.querySelector(
      ".numberOfColonistsInput",
    ).value;
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
  };

  const updateConstruction = () => {
    const contructionSkill = Number(
      document.getElementById("constructionInput").value,
    );

    let constructionSpeed = 0.3 + 0.0875 * contructionSkill;
    let manipulation =
      Number(document.getElementById("manipulationInput").value) / 100;

    constructionSpeed = constructionSpeed * manipulation;

    constructionSpeed = applyGlobalWorkSpeed(constructionSpeed);

    const constructionSpeedElement =
      document.getElementById("constructionSpeed");
    constructionSpeedElement.innerText = (constructionSpeed * 100).toFixed(0);
  };

  const updateCooking = () => {
    const cookingSkill = Number(document.getElementById("cookingInput").value);

    let manipulation = Number(
      document.getElementById("manipulationInput").value,
    );
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

    const cookingSpeedElement = document.getElementById("cookingSpeed");
    cookingSpeedElement.innerText = (cookingMultiplier * 100).toFixed(0);
  };

  const updateMining = () => {
    const miningSkill = Number(document.getElementById("miningInput").value);
    let miningMultiplier = 0.04 + 0.12 * miningSkill;

    let manipulation =
      Number(document.getElementById("manipulationInput").value) / 100;

    miningMultiplier = miningMultiplier * manipulation;

    miningMultiplier = applyGlobalWorkSpeed(miningMultiplier);

    const miningSpeedElement = document.getElementById("miningSpeed");
    miningSpeedElement.innerText = (miningMultiplier * 100).toFixed(0);
  };

  const updatePlants = () => {
    const plantsSkill = Number(document.getElementById("plantsInput").value);
    let plantsSpeed = 0.08 + 0.115 * plantsSkill;

    let manipulation =
      Number(document.getElementById("manipulationInput").value) / 100;

    plantsSpeed = plantsSpeed * manipulation;

    plantsSpeed = applyGlobalWorkSpeed(plantsSpeed);

    if (plantsSpeed < 0.1) {
      plantsSpeed = 0.1;
    }

    const plantsSpeedElement = document.getElementById("plantsSpeed");
    plantsSpeedElement.innerText = (plantsSpeed * 100).toFixed(0);
  };

  const updateForage = () => {
    const plantsSkill = Number(document.getElementById("plantsInput").value);
    let forageEfficiency = 0.09 * plantsSkill;

    let manipulation =
      Number(document.getElementById("manipulationInput").value) / 100;

    forageEfficiency -= (1 - manipulation) / 2;

    forageEfficiency = applyGlobalWorkSpeed(forageEfficiency);

    const forageAmountElement = document.getElementById("forageAmount");
    forageAmountElement.innerText = (forageEfficiency * 100).toFixed(0);
  };

  const applyGlobalWorkSpeed = (speed) => {
    let globalWorkSpeed = Number(
      document.getElementById("globalWorkSpeedInput").value,
    );
    globalWorkSpeed /= 100;

    speed *= globalWorkSpeed;
    return speed;
  };

  const applyWildness = (tameChance) => {
    let wildness = Number(document.getElementById("wildness").value);
    wildness /= 100;

    if (wildness == 1) tameChance = 0;
    else if (wildness > 0.5) {
      tameChance = (tameChance / 2) * (1 / wildness);
    } else if (wildness < 0.5) {
      tameChance = tameChance * (2 - wildness * 2);
    }

    return tameChance;
  };

  const updateAnimals = () => {
    const animalSkill = Number(document.getElementById("animalInput").value);
    let animalTameChance = 0.04 + 0.03 * animalSkill;

    let manipulation =
      Number(document.getElementById("manipulationInput").value) / 100;

    if (manipulation < 0.8) {
      animalTameChance -= (0.8 - manipulation) * 0.5;
    }

    animalTameChance = applyWildness(animalTameChance);

    const tameChanceElement = document.getElementById("tameChance");
    tameChanceElement.innerText = (animalTameChance * 100).toFixed(0);
  };

  const updateMedical = () => {
    const medicalSkill = Number(document.getElementById("medicalInput").value);
    let medicalMultiplier = 0.4 + 0.06 * medicalSkill;

    let manipulation =
      Number(document.getElementById("manipulationInput").value) / 100;

    medicalMultiplier -= (1 - manipulation) * 1;

    medicalMultiplier = applyGlobalWorkSpeed(medicalMultiplier);

    const medicalSpeedElement = document.getElementById("medicalSpeed");
    medicalSpeedElement.innerText = (medicalMultiplier * 100).toFixed(0);
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
        class="numberOfColonistsInput"
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
          value="0"
          type="number"
          id="animalInput"
        />
      </div>
      <div>
        <label for="constructionInput">Construction</label>
        <input
          on:change={godFunction}
          max="20"
          min="0"
          value="0"
          type="number"
          id="constructionInput"
        />
      </div>
      <div>
        <label for="cookingInput">Cooking</label>
        <input
          on:change={godFunction}
          max="20"
          min="0"
          value="0"
          type="number"
          id="cookingInput"
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
          value="0"
          type="number"
          id="medicalInput"
        />
      </div>
      <div>
        <label for="miningInput">Mining</label>
        <input
          on:change={godFunction}
          max="20"
          min="0"
          value="0"
          type="number"
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
        <label for="plantsInput">Plants</label>
        <input
          on:change={godFunction}
          max="20"
          min="0"
          value="0"
          type="number"
          id="plantsInput"
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
        <label for="shootingInput">Shooting</label>
        <input
          on:change={godFunction}
          max="20"
          min="0"
          value="0"
          type="number"
          id="shootingInput"
        />
      </div>
      <div>
        <label for="socialInput">Social</label>
        <input
          on:change={godFunction}
          max="20"
          min="0"
          value="0"
          type="number"
          id="socialInput"
        />
      </div>
    </div>

    <div class="mb rimworld-subheader">Properties</div>
    <div class="propertyInputs">
      <div>
        <label for="globalWorkSpeedInput">Global Work Speed</label>
        <input
          on:change={godFunction}
          min="30"
          value="100"
          type="number"
          id="globalWorkSpeedInput"
        />
      </div>
      <div>
        <label for="manipulationInput">Manipulation</label>
        <input
          on:change={godFunction}
          min="0"
          value="100"
          type="number"
          id="manipulationInput"
        />
      </div>
    </div>

    <div class="mb rimworld-subheader">Stats</div>
    <div class="statsOutputs">
      <div>
        <span>Construction speed:</span>
        <span id="constructionSpeed">30</span><span>%</span>
      </div>

      <div>
        <span>Cooking speed:</span>
        <span id="cookingSpeed">40</span><span>%</span>
      </div>

      <div>
        <span>Mining speed:</span>
        <span id="miningSpeed">4</span><span>%</span>
      </div>

      <div>
        <span>Plant speed:</span>
        <span id="plantsSpeed">10</span><span>%</span>
      </div>

      <div>
        <span>Medical speed:</span>
        <span id="medicalSpeed">40</span><span>%</span>
      </div>

      <div>
        <span>Forage Amount:</span>
        <span id="forageAmount">0</span><span>%</span>
      </div>

      <div>
        <span>Tame Chance:</span>
        <span id="tameChance">4</span><span>% </span>
        <span>(Wildness %</span>
        <input
          on:change={godFunction}
          id="wildness"
          min="0"
          value="50"
          max="100"
          type="number"
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
