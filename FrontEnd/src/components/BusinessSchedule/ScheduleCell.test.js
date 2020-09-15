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

  // unavailable cells should have className 'schedule-cell-unavailable'
  test('shows unavailable cell when isAvailable is false', () => {
    const { container } = render(<ScheduleCell {...unavailableProps} />);
    expect(container.querySelector('.schedule-cell-unavailable')).toBeInTheDocument();
  });

  // available cells should have className 'schedule-cell'
  test('shows available cell when isAvailable is true', () => {
    const { container } = render(<ScheduleCell {...availableProps} />);
    expect(container.querySelector('.schedule-cell')).toBeInTheDocument();
  });

  // unavailable cells should NOT have className 'schedule-cell'
  test('unavailable cells should NOT have className schedule-cell', () => {
    const { container } = render(<ScheduleCell {...unavailableProps} />);
    expect(container.querySelector('.schedule-cell')).not.toBeInTheDocument();
  });

  // available cells should NOT have className 'schedule-cell-unavailable'
  test('available cells should NOT have className schedule-cell-unavailable', () => {
    const { container } = render(<ScheduleCell {...availableProps} />);
    expect(container.querySelector('.schedule-cell-unavailable')).not.toBeInTheDocument();
  });
})