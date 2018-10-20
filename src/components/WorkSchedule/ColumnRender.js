import React, { Component } from "react";
// import { data }   from '../../data/Data_WorkSchedule';
// @TODO as we commented that data, should we get rid of it?
// or maybe we can use it as readme sample about what kind of datab with what structure should have our servercall?
import data from "@groceristar/groceristar-fetch/mealCalendar";
// import { rendererFunc } from "./Methods.js";
import RenderData from "./RenderData.js";

class ColumnRender extends Component {
  Schedule() {
    //@TODO can we instead of having here a
    var dishByWeek = data.getDishByWeek(this.props.randomWeek)[0];
    var recipes = dishByWeek["recipes"];
    var dishByDay = recipes[this.props.index + 1];

    // var rendere = new RenderData();
    // rendere.setIngredient(this.props.randomIngredients[this.props.index]);
    // rendere.setMode(this.props.mode);
    // rendere.setDishByDay(dishByDay);
    var result = {
      "dishByDay" : dishByDay,
      "mode": this.props.mode,
      "ingredient": this.props.randomIngredients[this.props.index]
    };
    return (<RenderData mealByDay = {result}/ >);
    {/* rendererFunc(result, this.props.mode, this.props.randomIngredients[this.props.index]); */}
  }

  render() {
    return <div>{this.Schedule()}</div>;
  }
}

export { ColumnRender };
