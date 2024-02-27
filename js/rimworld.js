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
};

const updateConstruction = (inputs) => {
  const contructionSkill = Number(
    document.getElementById("constructionInput").value
  );
  const constructionTime = ((0.3 + 0.0875 * contructionSkill) * 100).toFixed(2);
  const constructionSpeed = document.getElementById("constructionSpeed");

  constructionSpeed.innerText = constructionTime;
};
