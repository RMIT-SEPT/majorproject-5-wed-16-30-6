import React from "react";
import { BusinessOption } from "./BusinessOption";
import { shallow, mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<BusinessOption /> component Unit Test", () => {
  const props = {
    businessId: 1
  };

  it("should render 1 <BusinessOption /> component", () => {
    const wrapper = shallow(<BusinessOption {...props} />);
    expect(wrapper).toHaveLength(1);
  });

  it("renders a '.business-option'", () => {
    const wrapper = mount(<BusinessOption {...props}/>);
    expect(wrapper.find('.business-option').length).toBe(1);
  });

  it("renders a '.business-name'", () => {
    const wrapper = mount(<BusinessOption {...props}/>);
    expect(wrapper.find('.business-name').length).toBe(1);
  });

  it("renders a '.business-desc'", () => {
    const wrapper = mount(<BusinessOption {...props}/>);
    expect(wrapper.find('.business-desc').length).toBe(1);
  });

  test('it should call history.push', () => {
    const wrapper = mount(<BusinessOption />);
    const push = jest.fn();
    wrapper.setProps({ history: { push } });
    wrapper.simulate('click');
    const historyMock = { push: jest.fn() };
    expect(historyMock.push.mock.calls[0]).toHaveBeenCalled;
  });
})