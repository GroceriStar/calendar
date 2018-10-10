import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DisplayList from "./DisplayList";

import data from "@groceristar/groceristar-fetch/chickenKyiv";

Enzyme.configure({ adapter: new Adapter() });

// describe("<DisplayList /> component shallow only methods ", () => {
//   test("renders without crashing", () => {
//     const recipe = data.getRecipe()[0];

//     // const wrapper = shallow(<DisplayList />);
//     const wrapper = shallow(<DisplayList data={recipe.ingredients} />);

//     expect(wrapper.contains(<ul></ul>)).toBe(true);
//     // expect;
//   });
// });

// count child elements
describe("<DisplayList /> count child elements", () => {
  test("renders li elements and compare their count", () => {
    const recipe = data.getRecipe()[0];
    const lenght = recipe.ingredients.lenght;
    const wrapper = shallow(<DisplayList data={recipe.ingredients} />);

    expect(wrapper.find(li)).to.have.lengthOf(lenght);
  });
});

describe("<DisplayList /> find class or property", () => {
  test("find class", () => {
    const wrapper = shallow(<DisplayList />);

    expect(wrapper.hasClass("ingredient")).toBe(true);
  });
});

describe("<DisplayList />  click event ", () => {
  const wrapper = shallow(<DisplayList />);

  wrapper.find("checkbox").simulate("change");
});

describe("<DisplayList />  find child ", () => {
  const wrapper = shallow(<DisplayList />);

  expect(wrapper.contains(<ul class="ingredient list short" />)).to.equal(true);
});
