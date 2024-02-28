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
};

const updateConstruction = (inputs) => {
  const contructionSkill = Number(
    document.getElementById("constructionInput").value
  );

  let constructionMultiplier = 0.3 + 0.0875 * contructionSkill;

  constructionMultiplier = applyGlobalWorkSpeed(constructionMultiplier);

  const constructionSpeed = document.getElementById("constructionSpeed");
  constructionSpeed.innerText = (constructionMultiplier * 100).toFixed(0);
};

const updateCooking = (inputs) => {
  const cookingSkill = Number(document.getElementById("cookingInput").value);
  let cookingMultiplier = 0.4 + 0.06 * cookingSkill;

  cookingMultiplier = applyGlobalWorkSpeed(cookingMultiplier);

  const cookingSpeed = document.getElementById("cookingSpeed");
  cookingSpeed.innerText = (cookingMultiplier * 100).toFixed(0);
};

const updateMining = (inputs) => {
  const miningSkill = Number(document.getElementById("miningInput").value);
  let miningMultiplier = 0.04 + 0.12 * miningSkill;

  miningMultiplier = applyGlobalWorkSpeed(miningMultiplier);

  const miningSpeed = document.getElementById("miningSpeed");
  miningSpeed.innerText = (miningMultiplier * 100).toFixed(0);
};

const updatePlants = (inputs) => {
  const plantsSkill = Number(document.getElementById("plantsInput").value);
  let plantsMultiplier = 0.08 + 0.115 * plantsSkill;

  plantsMultiplier = applyGlobalWorkSpeed(plantsMultiplier);

  if (plantsMultiplier < 0.1) {
    plantsMultiplier = 0.1;
  }

  const plantsSpeed = document.getElementById("plantsSpeed");
  plantsSpeed.innerText = (plantsMultiplier * 100).toFixed(0);
};

const applyGlobalWorkSpeed = (speed) => {
  let globalWorkSpeed = Number(
    document.getElementById("globalWorkSpeedInput").value
  );

  globalWorkSpeed /= 100;
  speed *= globalWorkSpeed;
  return speed;
};
