import React from 'react';
import { shallow } from 'enzyme';
import ViewSchedule from '../ViewSchedule'

describe('<ViewSchedule />', () => {
  it('Get snapshot', () => {
    const props = {
      onShowPopup: jest.fn(),
      listEvents: [],
      date: {},
    }
    const wrappedComponent = shallow(<ViewSchedule {...props} />);
    expect(wrappedComponent).toMatchSnapshot();
  });
  
  it('should render schedule', () => {
    const props = {
      onShowPopup: jest.fn(),
      listEvents: [],
      date: {},
    }
    const wrappedComponent = shallow(<ViewSchedule {...props} />);
    expect(wrappedComponent.find('.schedule').exists()).toBeTruthy();
  });

  it('should render DayLabel', () => {
    const props = {
      onShowPopup: jest.fn(),
      listEvents: [],
      date: {},
    }
    const wrappedComponent = shallow(<ViewSchedule {...props} />);
    expect(wrappedComponent.find('DayLabel').exists()).toBeTruthy();
  });

  it('should render Sidebar', () => {
    const props = {
      onShowPopup: jest.fn(),
      listEvents: [],
      date: {},
    }
    const wrappedComponent = shallow(<ViewSchedule {...props} />);
    expect(wrappedComponent.find('Sidebar').exists()).toBeTruthy();
  });
});