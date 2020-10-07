import React from "react";
import { LinkButton } from "./LinkButton";
import { shallow, mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<LinkButton /> component Unit Test", () => {
  const props = {
    className: "link",
    label: "Home"
  };

  it("should render 1 <LinkButton /> component", () => {
    const wrapper = shallow(<LinkButton {...props} />);
    expect(wrapper).toHaveLength(1);
  });

  it("should render one div (for label)", () => {
    const wrapper = mount(<LinkButton {...props}/>);
    expect(wrapper.find('div').length).toBe(1);
  });

  test('it should call history.push', () => {
    const wrapper = mount(<LinkButton />);
    const push = jest.fn();
    wrapper.setProps({ history: { push } });
    wrapper.simulate('click');
    const historyMock = { push: jest.fn() };
    expect(historyMock.push.mock.calls[0]).toHaveBeenCalled;
  });
})