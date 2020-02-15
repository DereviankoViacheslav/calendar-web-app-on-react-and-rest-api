import React from 'react';
import { shallow } from 'enzyme';
import FormCreateEvent from '../FormCreateEvent'

describe('<FormCreateEvent />', () => {
  const props = {
    onChange: jest.fn(),
    handleSubmit: jest.fn(),
    onClosePopup: jest.fn(),
    onDeleteEvent: jest.fn(),
    startDate: '2020-02-12',
    startTime: '12:00',
    endDate: '2020-02-12',
    endTime: '14:00',
    color: '#4183f1',
    name: 'Test event',
    description: 'Test description',
    isShowTrashIcon: true,
  };

  it('Get snapshot', () => {
    const wrappedComponent = shallow(<FormCreateEvent {...props} />);
    expect(wrappedComponent).toMatchSnapshot();
  });

  it('should render popup', () => {
    const wrappedComponent = shallow(<FormCreateEvent {...props} />);
    expect(wrappedComponent.find('.popup').exists()).toBeTruthy();
  });
});