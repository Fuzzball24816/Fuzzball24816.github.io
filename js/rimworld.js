function calculateNutrition() {
  const numberOfColonists = $(".numberOfColonistsInput").val();
  const nutritionRequiredPerDay = 1.6 * numberOfColonists;

  const mealFactor = getMealFactor();

  plantCalc(nutritionRequiredPerDay, mealFactor, "ricePlantsNeeded", 0.054);
  plantCalc(nutritionRequiredPerDay, mealFactor, "cornPlantsNeeded", 0.0525);
  plantCalc(nutritionRequiredPerDay, mealFactor, "potatoPlantsNeeded", 0.0515);
  plantCalc(nutritionRequiredPerDay, mealFactor, "berryPlantsNeeded", 0.047);
  plantCalc(nutritionRequiredPerDay, mealFactor, "fungusPlantsNeeded", 0.0495);
}

function getMealFactor() {
  const mealOption = document.querySelector(
    'input[name="foodSelect"]:checked'
  ).value;

  let multiplier;
  if (mealOption === "raw") {
    multiplier = 1;
  } else if (mealOption === "paste") {
    multiplier = 3;
  } else if (mealOption === "simple") {
    multiplier = 1.8;
  } else if (mealOption === "fine") {
    multiplier = 1.8;
  } else if (mealOption === "lavish") {
    multiplier = 1;
  }

  return multiplier;
}

function plantCalc(
  nutritionRequiredPerDay,
  mealFactor,
  elementClass,
  plantNutritonPerPlantPerDay
) {
  const nutritionPerPlantAfterCooking =
    plantNutritonPerPlantPerDay * mealFactor;

  const plantsNeeded = nutritionRequiredPerDay / nutritionPerPlantAfterCooking;

  placeOutput(elementClass, plantsNeeded);
}

function placeOutput(htmlClass, number) {
  const output = $(`.${htmlClass}`);
  output.html(Math.round(number));
}
