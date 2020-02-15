import React from 'react';
import { shallow } from 'enzyme';
import DayLabel from '../DayLabel'
import moment from 'moment';

describe('<DayLabel />', () => {
  const props = {
    date: moment('2020-02-12'),
  };

  it('Get snapshot', () => {
    const wrappedComponent = shallow(<DayLabel {...props} />);
    expect(wrappedComponent).toMatchSnapshot();
  });

  it('should render labels', () => {
    const wrappedComponent = shallow(<DayLabel {...props} />);
    expect(wrappedComponent.find('.labels').exists()).toBeTruthy();
  });
});