import React from 'react';
import { shallow } from 'enzyme';
import Day from '../Day'

describe('<Day />', () => {
  const props = {
    date: '2020-02-12',
    events: [],
    onShowPopup: jest.fn(),
  };

  it('Get snapshot', () => {
    const wrappedComponent = shallow(<Day {...props} />);
    expect(wrappedComponent).toMatchSnapshot();
  });

  it('should render column-day', () => {
    const wrappedComponent = shallow(<Day {...props} />);
    expect(wrappedComponent.find('.column-day').exists()).toBeTruthy();
  });
});