import React from "react";
import Day from "./Day";
import { shallow, mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<Day /> component Unit Test", () => {
  const timeslots = [
    {
      id: 18,
      businessId: 8,
      startDateTime: "2020-08-15T23:00:00Z",
      endDateTime: "2020-08-16T01:00:00Z",
      workerId: 1
    },
    {
      id: 13,
      businessId: 1,
      startDateTime: "2020-08-17T23:00:00Z",
      endDateTime: "2020-08-18T01:00:00Z",
      workerId: 3
    }
  ];

  const props = {
    timeslots: timeslots
  }

  it("should render 1 <Day /> component", () => {
    const component = shallow(<Day {...props} />);
    expect(component).toHaveLength(1);
  });

})