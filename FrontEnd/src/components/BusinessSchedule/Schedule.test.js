import React from "react";
import Schedule from "./Schedule";
import Day from "./Day";
import { shallow, mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<Schedule /> component Unit Test", () => {
  const mockFn = jest.fn();
  const propsInSchedule = [
    {
      date: 18,
      month: 8,
      year: 2020,
      timeslots: [
        {
          "id": 1,
          "businessId": 1,
          "startDateTime": "2020-08-15T23:00:00Z",
          "endDateTime": "2020-08-16T01:00:00Z",
          "workerId": 1
        },
        {
          "id": 13,
          "businessId": 1,
          "startDateTime": "2020-08-17T23:00:00Z",
          "endDateTime": "2020-08-18T01:00:00Z",
          "workerId": 3
        },
      ]
    },
    {
      date: 19,
      month: 8,
      year: 2020,
      timeslots: [
        {
          "id": 1,
          "businessId": 1,
          "startDateTime": "2020-08-15T23:00:00Z",
          "endDateTime": "2020-08-16T01:00:00Z",
          "workerId": 1
        },
        {
          "id": 13,
          "businessId": 1,
          "startDateTime": "2020-08-17T23:00:00Z",
          "endDateTime": "2020-08-18T01:00:00Z",
          "workerId": 3
        },
      ]
    },
  ];

  var props = {};
  props.loadData = mockFn;
  props.schedule = propsInSchedule;

  it("should render 1 <Schedule /> component", () => {
    const component = shallow(<Schedule {...props} />);
    expect(component).toHaveLength(1);
  });

  it("should render 2 <Day /> sub-component", () => {
    const component = shallow(<Schedule {...props} />);
    expect(component.find(Day).length).toBe(2);
  });
})