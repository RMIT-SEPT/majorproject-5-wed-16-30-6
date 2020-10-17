import React from "react";
import { Layout } from "./Layout";
import { shallow, mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<Layout /> component Unit Test", () => {

  it("should render 1 <Layout /> component", () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper).toHaveLength(1);
  });

  it("renders '.right-nav'", () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find('.left-nav').length).toBe(1);
  });

  it("renders '.right-nav'", () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find('.right-nav').length).toBe(1);
  });

})