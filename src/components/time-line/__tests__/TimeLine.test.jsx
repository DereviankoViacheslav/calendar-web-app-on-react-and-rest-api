import React from 'react';
import { shallow } from 'enzyme';
import TimeLine from '../TimeLine'

describe('<TimeLine />', () => {
  it('should render time-line', () => {
    const props = {
      heigthHour: 42,
    }
    const wrappedComponent = shallow(<TimeLine {...props} />);
    expect(wrappedComponent.find('.time-line').exists()).toBeTruthy();
  });
});