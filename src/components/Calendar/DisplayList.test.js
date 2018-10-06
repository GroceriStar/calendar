import React from "react";
import Enzyme, { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// import Adapter from "enzyme-adapter-react-16";

import { DisplayList } from "./DisplayList";

// configure({ adapter: new Adapter() });

describe("<DisplayList /> component shallow only methods ", () => {
  test("renders without crashing", () => {
    const wrapper = shallow(<DisplayList />);
    expect(wrapper.contains(<ul />)).toBe(true);
    // expect;
  });
});
