import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DisplayList from "./DisplayList";
import synon from "synon";

import data from "@groceristar/groceristar-fetch/chickenKyiv";

Enzyme.configure({ adapter: new Adapter() });

// describe("<DisplayList /> component shallow only methods ", () => {
//   it("renders without crashing", () => {
//     const recipe = data.getRecipe()[0];

//     // const wrapper = shallow(<DisplayList />);
//     const wrapper = shallow(<DisplayList data={recipe.ingredients} />);

//     expect(wrapper.contains(<ul></ul>)).toBe(true);
//     // expect;
//   });
// });

// count child elements
describe("<DisplayList /> count child elements", () => {
  it("renders li elements and compare their count", () => {
    const recipe = data.getRecipe()[0];
    const lenght = recipe.ingredients.lenght;
    const wrapper = shallow(<DisplayList data={recipe.ingredients} />);

    expect(wrapper.find(li)).to.have.lengthOf(lenght);
  });
});

describe("<DisplayList /> find class or property", () => {
  it("find class", () => {
    const wrapper = shallow(<DisplayList />);

    expect(wrapper.hasClass("ingredient")).toBe(true);
  });
});

// !!!!!
describe("<DisplayList />  click event ", () => {
  it("", () => {
    const wrapper = shallow(<DisplayList />);

    wrapper.find("checkbox").simulate("change");
  });
});

describe("<DisplayList />  find child ", () => {
  it("", () => {
    const wrapper = shallow(<DisplayList />);

    expect(wrapper.contains(<ul class="ingredient list short" />)).to.equal(
      true
    );
  });
});

describe("<DisplayList /> check if component have componentDidMount", () => {
  it("", () => {
    sinon.spy(DisplayList.prototype, "componentDidMount");
    const wrapper = mount(<DisplayList />);
    expect(Foo.prototype.componentDidMount).to.have.property("data", 1);
  });

  // expect
});

describe("for <DisplayList /> we're showing different between shallow and mount", () => {
  it("render as child or not", () => {
    const recipe1 = data.getRecipe()[0];
    const ingredients1 = recipe1.ingredients;

    const wrapper = mount(
      <div>
        <DisplayList data={ingredients1} />
      </div>
    );

    wrapper.debug();

    const wrapper = shallow(<DisplayList data={ingredients1} />);
    wrapper.debug();

    const wrapper = shallow(
      <div>
        <DisplayList data={ingredients1} />
      </div>
    );

    wrapper.debug();
  });
});

describe("<DisplayList /> set props or update state", () => {
  it("allows us to set props", () => {
    const recipe1 = data.getRecipe()[0];
    const recipe2 = data.getRecipe()[1];
    const ingredients1 = recipe1.ingredients;
    const ingredients2 = recipe2.ingredients;
    // const lenght = recipe.ingredients.lenght;

    const wrapper = mount(<DisplayList data={ingredients1} />);
    expect(wrapper.props().data).to.equal({ ingredients1 });

    wrapper.setProps({ data: ingredients2 });
    expect(wrapper.props().data).to.equal(ingredients2);
  });

  it("set state", () => {
    const recipe1 = data.getRecipe()[0];
    const ingredients1 = recipe1.ingredients;
    const wrapper = mount(<DisplayList />);
    wrapper.setState({ data: ingredients1 });
  });
});
