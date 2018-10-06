import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { DisplayList } from "./DisplayList";

import data from "@groceristar/groceristar-fetch/chickenKyiv";

configure({ adapter: new Adapter() });

describe("<DisplayList /> component shallow only methods ", () => {

  const recipe = data.getRecipe()[0];

  it("renders without crashing", () => {
    const wrapper = shallow(<DisplayList />);
    // const wrapper = shallow(<DisplayList data={recipe.ingredients} />);
    expect(wrapper.contains(<ul></ul>)).toBe(true);
    // expect;
  });
});
