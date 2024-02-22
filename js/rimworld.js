function calculateNutrition() {
  const input = $(".numberOfColonistsInput");
  const numberOfColonists = input.val();

  const nutritionRequiredPerDay = 1.6 * numberOfColonists;

  riceCalc(nutritionRequiredPerDay);
  cornCalc(nutritionRequiredPerDay);
  potatoCalc(nutritionRequiredPerDay);
  berryCalc(nutritionRequiredPerDay);
  fungusCalc(nutritionRequiredPerDay);
}

function riceCalc(nutritionRequiredPerDay) {
  const riceNutritionPerDayPerPlant = 0.054;
  const ricePlantsNeeded =
    nutritionRequiredPerDay / riceNutritionPerDayPerPlant;

  placeOutput("ricePlantsNeeded", ricePlantsNeeded);
}

function cornCalc(nutritionRequiredPerDay) {
  const cornNutritionPerDayPerPlant = 0.0525;
  const cornPlantsNeeded =
    nutritionRequiredPerDay / cornNutritionPerDayPerPlant;

  placeOutput("cornPlantsNeeded", cornPlantsNeeded);
}

function potatoCalc(nutritionRequiredPerDay) {
  const potatoNutritionPerDayPerPlant = 0.0515;
  const potatoPlantsNeeded =
    nutritionRequiredPerDay / potatoNutritionPerDayPerPlant;

  placeOutput("potatoPlantsNeeded", potatoPlantsNeeded);
}

function berryCalc(nutritionRequiredPerDay) {
  const berryNutritionPerDayPerPlant = 0.047;
  const berryPlantsNeeded =
    nutritionRequiredPerDay / berryNutritionPerDayPerPlant;

  placeOutput("berryPlantsNeeded", berryPlantsNeeded);
}

function fungusCalc(nutritionRequiredPerDay) {
  const fungusNutritionPerDayPerPlant = 0.0495;
  const fungusPlantsNeeded =
    nutritionRequiredPerDay / fungusNutritionPerDayPerPlant;

  placeOutput("fungusPlantsNeeded", fungusPlantsNeeded);
}

function placeOutput(htmlClass, number) {
  const output = $(`.${htmlClass}`);
  output.html(Math.round(number));
}
