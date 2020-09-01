import React from "react";
import { render } from '@testing-library/react';
import ScheduleCell from "./ScheduleCell";
import { shallow, mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<ScheduleCell /> component Unit Test", () => {
  const unavailableProps = {
    startTime: 9,
    endTime: 10,
    isAvailable: false,
  };

  const availableProps = {
    startTime: 9,
    endTime: 10,
    isAvailable: true,
  };

  it("should render 1 <ScheduleCell /> component", () => {
    const component = shallow(<ScheduleCell {...unavailableProps} />);
    expect(component).toHaveLength(1);
  });

  test('shows unavailable cell when isAvailable is false', () => {
    const { container } = render(<ScheduleCell {...unavailableProps} />);
    expect(container.querySelector('.schedule-cell-unavailable')).toBeInTheDocument();
  });

  test('shows available cell when isAvailable is true', () => {
    const { container } = render(<ScheduleCell {...availableProps} />);
    expect(container.querySelector('.schedule-cell')).toBeInTheDocument();
  });
})