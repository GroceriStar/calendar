import React, { Component } from "react";
// import { data }   from '../../data/Data_WorkSchedule';
// @TODO as we commented that data, should we get rid of it?
// or maybe we can use it as readme sample about what kind of datab with what structure should have our servercall?
// import data from "@groceristar/groceristar-fetch/mealCalendar";
// import { rendererFunc } from "./Methods.js";
import RenderData from "./RenderData.js";
import { getDish } from "../selectors/Selector.js";

class ColumnRender extends Component {
  
  Schedule() {
    //@TODO can we instead of having here a

    var dishByWeek = getDish(this.props.randomWeek)[0];
    var recipes = dishByWeek["recipes"];
    var dishByDay = recipes[this.props.index + 1];

    var result = {
      "dishByDay" : dishByDay,
      "mode": this.props.mode,
      "ingredient": this.props.randomIngredients[this.props.index]
    };

    console.log(result.dishByDay);
    console.log(result.mode);
    console.log(result.ingredient);
    return (<RenderData mealByDay = {result}/ >);

  }

  render() {
    return <div>{this.Schedule()}</div>;
  }
}

export { ColumnRender };
