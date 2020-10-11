import React from "react";
import CustomerDashboard from "./CustomerDashboard";
import { shallow, mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CustomerDashboardColumn from "./CustomerDashboardColumn";

Enzyme.configure({ adapter: new Adapter() });

describe("<CustomerDashboard /> component Unit Test", () => {
  const state = {
    selected: "profile"
  }

  const match = {
    params: { id: "1" },
    path: "/customer/:id",
    url: "/customer/1",
    isExact: true,
  }

  const props = {
    location: state,
    match: match
  }

  it("should render 1 <CustomerDashboard /> component", () => {
    const component = shallow(<CustomerDashboard {...props} />);
    expect(component).toHaveLength(1);
  });

  test("should render 1 <CustomerDashboardColumn /> sub-component", () => {
    const component = shallow(<CustomerDashboard {...props} />);
    expect(component.find(CustomerDashboardColumn).length).toBe(1);
  });
})