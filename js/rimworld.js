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

const masterFunction = () => {
  updateConstruction();
  updateCooking();
  updateMining();
  updatePlants();
  updateAnimals();
  updateMedical();
};

const updateConstruction = () => {
  const contructionSkill = Number(
    document.getElementById("constructionInput").value
  );

  let constructionMultiplier = 0.3 + 0.0875 * contructionSkill;

  constructionMultiplier = applyGlobalWorkSpeed(constructionMultiplier);

  const constructionSpeedElement = document.getElementById("constructionSpeed");
  constructionSpeedElement.innerText = (constructionMultiplier * 100).toFixed(
    0
  );
};

const updateCooking = () => {
  const cookingSkill = Number(document.getElementById("cookingInput").value);
  let cookingMultiplier = 0.4 + 0.06 * cookingSkill;

  cookingMultiplier = applyGlobalWorkSpeed(cookingMultiplier);

  const cookingSpeedElement = document.getElementById("cookingSpeed");
  cookingSpeedElement.innerText = (cookingMultiplier * 100).toFixed(0);
};

const updateMining = () => {
  const miningSkill = Number(document.getElementById("miningInput").value);
  let miningMultiplier = 0.04 + 0.12 * miningSkill;

  miningMultiplier = applyGlobalWorkSpeed(miningMultiplier);

  const miningSpeedElement = document.getElementById("miningSpeed");
  miningSpeedElement.innerText = (miningMultiplier * 100).toFixed(0);
};

const updatePlants = () => {
  const plantsSkill = Number(document.getElementById("plantsInput").value);
  let plantsMultiplier = 0.08 + 0.115 * plantsSkill;

  plantsMultiplier = applyGlobalWorkSpeed(plantsMultiplier);

  if (plantsMultiplier < 0.1) {
    plantsMultiplier = 0.1;
  }

  const plantsSpeedElement = document.getElementById("plantsSpeed");
  plantsSpeedElement.innerText = (plantsMultiplier * 100).toFixed(0);
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

  if (wildness > 50) {
    tameChance *= 1 - wildness;
  } else {
    tameChance *= 1 + wildness;
  }

  return tameChance;
};

const updateAnimals = () => {
  const animalSkill = Number(document.getElementById("animalInput").value);
  let animalTameChance = 0.04 + 0.03 * animalSkill;

  animalTameChance = applyWildness(animalTameChance);

  const tameChanceElement = document.getElementById("tameChance");
  tameChanceElement.innerText = (animalTameChance * 100).toFixed(0);
};

const updateMedical = () => {
  const medicalSkill = Number(document.getElementById("medicalInput").value);
  let medicalMultiplier = 0.4 + 0.06 * medicalSkill;

  medicalMultiplier = applyGlobalWorkSpeed(medicalMultiplier);

  const medicalSpeedElement = document.getElementById("medicalSpeed");
  medicalSpeedElement.innerText = (medicalMultiplier * 100).toFixed(0);
};
