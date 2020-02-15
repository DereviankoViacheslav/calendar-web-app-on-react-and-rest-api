import React from 'react';
import { shallow } from 'enzyme';
import Week from '../Week'

describe('<Week />', () => {
  it('Get snapshot', () => {
    const props = {
      onShowPopup: jest.fn(),
      listEvents: [],
      date: {},
    }
    const wrappedComponent = shallow(<Week {...props} />);
    expect(wrappedComponent).toMatchSnapshot();
  });
  
  it('should render Week', () => {
    const props = {
      onShowPopup: jest.fn(),
      listEvents: [],
      date: {},
    }
    const wrappedComponent = shallow(<Week {...props} />);
    expect(wrappedComponent.find('.week').exists()).toBeTruthy();
  });
});