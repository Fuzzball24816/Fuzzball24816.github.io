<script>
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
  let miningSpeed = 4;
  let plantsSkill = 0;
  let plantsSpeed = 10;
  let forageAmount = 0;
  let globalWorkSpeed = 100;
  let wildness = 50;
  let animalSkill = 0;
  let animalTameChance = 4;
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

    miningSpeed = (miningMultiplier * 100).toFixed(0);
  };

  const updatePlants = () => {
    let newPlantsSpeed = 0.08 + 0.115 * plantsSkill;

    const manipulationPercent = manipulation / 100;

    newPlantsSpeed = newPlantsSpeed * manipulationPercent;

    newPlantsSpeed = applyGlobalWorkSpeed(newPlantsSpeed);

    if (newPlantsSpeed < 0.1) {
      newPlantsSpeed = 0.1;
    }

    plantsSpeed = (newPlantsSpeed * 100).toFixed(0);
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
    let medicalMultiplier = 0.4 + 0.06 * medicalSkill;

    const manipulationPercent = manipulation / 100;

    medicalMultiplier -= (1 - manipulationPercent) * 1;

    medicalMultiplier = applyGlobalWorkSpeed(medicalMultiplier);

    operationSpeed = (medicalMultiplier * 100).toFixed(0);
  };

  const updateOperationSpeed = () => {
    let medicalMultiplier = 0.4 + 0.06 * medicalSkill;

    const manipulationPercent = manipulation / 100;

    medicalMultiplier -= (1 - manipulationPercent) * 1;

    medicalMultiplier = applyGlobalWorkSpeed(medicalMultiplier);

    operationSpeed = (medicalMultiplier * 100).toFixed(0);
  };
</script>

<!-- Start of the skill calculator -->
<div class="mb rimworld-header">Skill Calculator</div>

<div class="mb rimworld-subheader">Skills</div>
<div class="skillInputs">
  <div>
    <span>Animals</span>
    <input
      on:change={godFunction}
      max="20"
      min="0"
      type="number"
      bind:value={animalSkill}
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
    <span>Crafting</span>
    <input on:change={godFunction} max="20" min="0" value="0" type="number" />
  </div>
  <div>
    <span>Medical</span>
    <input
      on:change={godFunction}
      max="20"
      min="0"
      type="number"
      bind:value={medicalSkill}
    />
  </div>
  <div>
    <span>Mining</span>
    <input
      on:change={godFunction}
      max="20"
      min="0"
      type="number"
      bind:value={miningSkill}
    />
  </div>
  <div>
    <span>Melee</span>
    <input on:change={godFunction} max="20" min="0" value="0" type="number" />
  </div>
  <div>
    <span>Intellectual</span>
    <input on:change={godFunction} max="20" min="0" value="0" type="number" />
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
    <span>Artistic</span>
    <input on:change={godFunction} max="20" min="0" value="0" type="number" />
  </div>
  <div>
    <span>Shooting</span>
    <input on:change={godFunction} max="20" min="0" value="0" type="number" />
  </div>
  <div>
    <span>Social</span>
    <input on:change={godFunction} max="20" min="0" value="0" type="number" />
  </div>
</div>

<div class="mb rimworld-subheader">Properties</div>
<div class="propertyInputs">
  <div>
    <span>Global Work Speed</span>
    <input
      on:change={godFunction}
      min="30"
      type="number"
      bind:value={globalWorkSpeed}
    />
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
    <span>{miningSpeed}</span><span>%</span>
  </div>

  <div>
    <span>Medical Operation Speed:</span>
    <span>{operationSpeed}</span><span>%</span>
  </div>

  <div>
    <span>Plant speed:</span>
    <span>{plantsSpeed}</span><span>%</span>
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
      min="0"
      type="number"
      id="wildness"
      bind:value={wildness}
      max="100"
    />)
  </div>
</div>

<style>
  .mb {
    margin-bottom: 15px;
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
