import React from "react";
import { Header } from "./Header";
import { shallow, mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<Header /> component Unit Test", () => {

  it("should render 1 <Header /> component", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toHaveLength(1);
  });

  it("renders '.right-nav'", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.left-nav').length).toBe(1);
  });

  it("renders '.right-nav'", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.right-nav').length).toBe(1);
  });

})