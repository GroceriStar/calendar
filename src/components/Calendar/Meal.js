import React, { Component } from "react";
import DisplayList from "./DisplayList";
import { Link } from 'react-router-dom';
import { getRecipeChickenKyiv } from "../selectors/selector.js";

class Meal extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: parseInt(props.match.params.id,10)
    }
  }
//
  render() {
    let recipe = getRecipeChickenKyiv()[this.state.id];
    return (
      <div>
      <div>
        <h2>{recipe.title}</h2>
        <h3>Ingredients</h3>
        <DisplayList data={recipe.ingredients} />

        <h3>Directions</h3>
        <DisplayList data={recipe.directions} />
      </div>
        <Link to="/">
          <h3>Back</h3>
        </Link>
      </div>
    );
  }
}

export default Meal;
