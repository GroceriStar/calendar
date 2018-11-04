import {mealCalendar} from "@groceristar/groceristar-fetch";
import {chickenKyiv} from "@groceristar/groceristar-fetch";

 function getDish(randomWeek){
      return mealCalendar.getDishByWeek(randomWeek);
  }

 function getRecipeChickenKyiv(){
      return chickenKyiv.getRecipe();
}

export {getDish, getRecipeChickenKyiv}
