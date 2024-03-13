"use strict";

const calculateNutrition = () => {
  const numberOfColonists = $(".numberOfColonistsInput").val();
  const nutritionRequiredPerDay = 1.6 * numberOfColonists;

  const mealOption = document.querySelector(
    'input[name="foodSelect"]:checked'
  ).value;

  plantCalc(nutritionRequiredPerDay, mealOption, "ricePlantsNeeded", 0.054);
  plantCalc(nutritionRequiredPerDay, mealOption, "cornPlantsNeeded", 0.0525);
  plantCalc(nutritionRequiredPerDay, mealOption, "potatoPlantsNeeded", 0.0515);
  plantCalc(nutritionRequiredPerDay, mealOption, "berryPlantsNeeded", 0.047);
  plantCalc(nutritionRequiredPerDay, mealOption, "fungusPlantsNeeded", 0.0495);
};

const plantCalc = (
  nutritionRequiredPerDay,
  mealOption,
  elementClass,
  plantNutritonPerPlantPerDay
) => {
  const nutritionPerPlantAfterCooking =
    plantNutritonPerPlantPerDay * mealMultiplerMap[mealOption];

  const plantsNeeded = nutritionRequiredPerDay / nutritionPerPlantAfterCooking;

  const output = $(`.${elementClass}`);
  output.html(Math.round(plantsNeeded));
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
    document.getElementById("constructionInput").value
  );

  let constructionSpeed = 0.3 + 0.0875 * contructionSkill;
  let manipulation =
    Number(document.getElementById("manipulationInput").value) / 100;

  constructionSpeed = constructionSpeed * manipulation;

  constructionSpeed = applyGlobalWorkSpeed(constructionSpeed);

  const constructionSpeedElement = document.getElementById("constructionSpeed");
  constructionSpeedElement.innerText = (constructionSpeed * 100).toFixed(0);
};

const updateCooking = () => {
  const cookingSkill = Number(document.getElementById("cookingInput").value);

  let manipulation = Number(document.getElementById("manipulationInput").value);
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
    document.getElementById("globalWorkSpeedInput").value
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
