import React, { Component, Fragment } from "react";
import DisplayList from "./DisplayList";
import { Link } from 'react-router-dom';
import { getRecipeChickenKyiv } from "../selectors/selector.js";

// @TODO We can have a separated componentm that will have this structure
// - h3
// - displayList
// so, we able to generate this layout more easily


// @TODO create a separated component - named MealLayout
// we'll use it in order to create a ways to display recipe

const IngredientsBlock = ({ ingredients }) => {
  <Block title="Ingredients" data={ingredients} />
}

const DirectionsBlock = ({ directions }) => {
  <Block title="Directions" data={directions} />
}


const Block = ({title, data}) => {
  <Fragment>
    <h3>
      {title}
    </h3>
    <DisplayList data={data} />
  </Fragment>
}

class Meal extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: parseInt(props.match.params.id,10)
    }
  }

  render() {
    // @TODO create a separate method at selector, so we can actually get only one recipe that we needed by passing id into it
    let recipe = getRecipeChickenKyiv()[this.state.id];
    return (
      <div>
        <div>
          <h2>
            {recipe.title}
          </h2>
          <IngredientsBlock />
          <DirectionsBlock />

        </div>
        <Link to="/">
          <h3>Back</h3>
        </Link>
      </div>
    );
  }
}

export default Meal;
