import React from "react";
import Schedule from "./Schedule";
import Day from "./Day";
import { shallow, mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { getByText } from "@testing-library/react";
import { toBeInTheDocument } from '@testing-library/jest-dom';

Enzyme.configure({ adapter: new Adapter() });

describe("<Schedule /> component Unit Test", () => {
  const mockFn = jest.fn();
  const scheduleProps = [
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

  const schedulePropsWithEmptyTimeSlots = [
    {
      date: 18,
      month: 8,
      year: 2020,
      timeslots: []
    },
    {
      date: 19,
      month: 8,
      year: 2020,
      timeslots: []
    },
    {
      date: 20,
      month: 8,
      year: 2020,
      timeslots: []
    },
    {
      date: 21,
      month: 8,
      year: 2020,
      timeslots: []
    },
    {
      date: 22,
      month: 8,
      year: 2020,
      timeslots: []
    },
    {
      date: 23,
      month: 8,
      year: 2020,
      timeslots: []
    },
    {
      date: 24,
      month: 8,
      year: 2020,
      timeslots: []
    }
  ];

  var props1 = {};
  var props2 = {};
  props1.loadData = mockFn;
  props2.loadData = mockFn;
  props1.schedule = scheduleProps;
  props2.schedule = schedulePropsWithEmptyTimeSlots;

  it("should render 1 <Schedule /> component", () => {
    const component = shallow(<Schedule {...props1} />);
    expect(component).toHaveLength(1);
  });

  it("should render 2 <Day /> sub-component", () => {
    const component = shallow(<Schedule {...props1} />);
    expect(component.find(Day).length).toBe(2);
  });

  it("schedule with empty timeslots should have state available being false", () => {
    const component = shallow(<Schedule {...props2} />);
    expect(component.instance().availability).toEqual(false);
  });

  it("schedule with timeslots should have state available being true", () => {
    const component = shallow(<Schedule {...props1} />);
    expect(component.instance().availability).toEqual(true);
  });
})