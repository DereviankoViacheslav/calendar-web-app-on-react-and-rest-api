import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header'
import moment from 'moment';

describe('<Header />', () => {
  const props = {
    onShowPopup: jest.fn(),
    goNextWeek: jest.fn(),
    goPrevWeek: jest.fn(),
    goToday: jest.fn(),
    date: moment('2020-02-12'),
  };

  it('Get snapshot', () => {
    const wrappedComponent = shallow(<Header {...props} />);
    expect(wrappedComponent).toMatchSnapshot();
  });

  it('should render navigate', () => {
    const wrappedComponent = shallow(<Header {...props} />);
    expect(wrappedComponent.find('.navigate').exists()).toBeTruthy();
  });
});