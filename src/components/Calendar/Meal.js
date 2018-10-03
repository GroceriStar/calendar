import React, { Component } from "react";

import data from "@groceristar/groceristar-fetch/chickenKyiv";
import DisplayList from "./DisplayList";

class Meal extends Component {
  render() {
    let recipe = data.getRecipe()[this.props.match.params.id];
    return (
      <div>
        <h2>{recipe.title}</h2>
        <h3>Ingredients</h3>
        <DisplayList data={recipe.ingredients} />

        <h3>Directions</h3>
        <DisplayList data={recipe.directions} />
      </div>
    );
  }
}

export default Meal;
