import React, { Component, Fragment } from "react";

import { Link } from 'react-router-dom';
import { getRecipeChickenKyivById } from "../selectors/selector.js";

import { IngredientList, DefaultList } from '@groceristar/grocery-component'
// @TODO We can have a separated componentm that will have this structure
// - h3
// - displayList
// so, we able to generate this layout more easily


// @TODO create a separated component - named MealLayout
// we'll use it in order to create a ways to display recipe

const Block = ({title, data}) => {
  return (
    <Fragment>
      <h3>
        {title}
      </h3>

      <DefaultList items={data} />
    </Fragment>
)
}

const IngredientsBlock = ({ ingredients }) => {
  return(
  <Block title="Ingredients" data={ingredients} />
)
}

const DirectionsBlock = ({ directions }) => {
  return(
  <Block title="Directions" data={directions} />
)
}

class Meal extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: parseInt(props.match.params.id,10)
    }
  }

  render() {
    let recipe = getRecipeChickenKyivById(this.state.id);
    return (
      <div>
        <div>
          <h2>
            {recipe.title}
          </h2>
          <IngredientsBlock ingredients={recipe.ingredients}/>
          <DirectionsBlock directions={recipe.directions}/>

        </div>
        <Link to="/">
          <h3>Back</h3>
        </Link>
      </div>
    );
  }
}

export default Meal;
