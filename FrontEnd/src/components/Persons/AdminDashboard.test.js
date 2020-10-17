import React from "react";
import AdminDashboard from "./AdminDashboard";
import { shallow, mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AdminDashboardColumn from "./AdminDashboardColumn";

Enzyme.configure({ adapter: new Adapter() });

describe("<AdminDashboard /> component Unit Test", () => {
  const state = {
    selected: "add_worker"
  }

  const match = {
    params: { id: "1" },
    path: "/admin/:id",
    url: "/admin/1",
    isExact: true,
  }

  const props = {
    location: state,
    match: match
  }

  it("should render 1 <AdminDashboard /> component", () => {
    const component = shallow(<AdminDashboard {...props} />);
    expect(component).toHaveLength(1);
  });

  test("should render 1 <AdminDashboardColumn /> sub-component", () => {
    const component = shallow(<AdminDashboard {...props} />);
    expect(component.find(AdminDashboardColumn).length).toBe(1);
  });
})