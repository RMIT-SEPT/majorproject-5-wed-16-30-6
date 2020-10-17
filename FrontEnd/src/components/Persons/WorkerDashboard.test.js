import React from "react";
import WorkerDashboard from "./WorkerDashboard";
import { shallow, mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WorkerDashboardColumn from "./WorkerDashboardColumn";

Enzyme.configure({ adapter: new Adapter() });

describe("<WorkerDashboard /> component Unit Test", () => {
  const state = {
    selected: "add_worker"
  }

  const match = {
    params: { id: "1" },
    path: "/worker/:id",
    url: "/worker/1",
    isExact: true,
  }

  const props = {
    location: state,
    match: match
  }

  it("should render 1 <WorkerDashboard /> component", () => {
    const component = shallow(<WorkerDashboard {...props} />);
    expect(component).toHaveLength(1);
  });

  test("should render 1 <WorkerDashboardColumn /> sub-component", () => {
    const component = shallow(<WorkerDashboard {...props} />);
    expect(component.find(WorkerDashboardColumn).length).toBe(1);
  });
})