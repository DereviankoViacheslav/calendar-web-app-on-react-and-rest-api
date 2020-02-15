import React from 'react';
import { shallow } from 'enzyme';
import Popup from '../Popup'
import moment from 'moment';

describe('<Popup />', () => {
  const state = {
    startDate: moment('2020-02-12').format('YYYY-MM-DD'),
    startTime: `${moment('2020-02-12').add(1, 'hours').format('HH')}:00`,
    endDate: moment('2020-02-12').format('YYYY-MM-DD'),
    endTime: `${moment('2020-02-12').add(2, 'hours').format('HH')}:00`,
    description: '',
    color: '#4183f1',
    isShowTrashIcon: false
  };
  const props = {
    handleSubmit: jest.fn(),
    onClosePopup: jest.fn(),
    onDeleteEvent: jest.fn(),
    event: {},
    date: '',
  };

  it('Get snapshot', () => {
    const wrappedComponent = shallow(<Popup {...props} />);
    wrappedComponent.setState(state);
    expect(wrappedComponent).toMatchSnapshot();
  });

  it('should render FormCreateEvent', () => {
    const wrappedComponent = shallow(<Popup {...props} />);
    wrappedComponent.setState(state);
    expect(wrappedComponent.find('FormCreateEvent').exists()).toBeTruthy();
  });
});