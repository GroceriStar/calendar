import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DisplayList from "./DisplayList";

import data from "@groceristar/groceristar-fetch/chickenKyiv";

Enzyme.configure({ adapter: new Adapter() });

describe("<DisplayList /> component shallow only methods ", () => {

    test("renders without crashing", () => {
    const recipe = data.getRecipe()[0];

    // const wrapper = shallow(<DisplayList />);
    const wrapper = shallow(<DisplayList data={recipe.ingredients} />);

    expect(wrapper.contains(<ul></ul>)).toBe(true);
    // expect;
  });
});
