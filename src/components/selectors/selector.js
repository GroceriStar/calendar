import data from "@groceristar/groceristar-fetch/mealCalendar";

class Selector{
  getDishByWeek(randomWeek){
    return data.getDishByWeek(randomWeek);
  }

}

export default Selector;
