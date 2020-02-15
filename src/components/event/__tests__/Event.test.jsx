import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event'

describe('<Event />', () => {
  const props = {
    event: {
      id: '11',
      name: 'Event 1111',
      createDate: '2020-02-03T08:41:25+02:00',
      startDate: '2020-02-13T11:45:00+02:00',
      endDate: '2020-02-13T15:45:00+02:00',
      description: '',
      color: '#ff6c00',
    },
    onShowPopup: jest.fn(),
    heigthHour: 42,
  };

  it('Get snapshot', () => {
    const wrappedComponent = shallow(<Event {...props} />);
    expect(wrappedComponent).toMatchSnapshot();
  });

  it('should render day-event', () => {
    const wrappedComponent = shallow(<Event {...props} />);
    expect(wrappedComponent.find('.day-event').exists()).toBeTruthy();
  });
});