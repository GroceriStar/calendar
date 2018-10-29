import React, { Component } from "react";

import data from "@groceristar/groceristar-fetch/chickenKyiv";
import DisplayList from "./DisplayList";

class Meal extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: parseInt(props.match.params.id,10)
    }
  }

  render() {
    let recipe = data.getRecipe()[this.state.id];
    return (
      <div>
      <div>
        <h2>{recipe.title}</h2>
        <h3>Ingredients</h3>
        <DisplayList data={recipe.ingredients} />

        <h3>Directions</h3>
        <DisplayList data={recipe.directions} />
      </div>
        <a href="/">
          <h3>Back</h3>
        </a>
      </div>
    );
  }
}

export default Meal;
