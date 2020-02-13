import React from 'react';
import { shallow } from 'enzyme';
import App from '../App'
import moment from 'moment';
import MockApiService from '../../../services/mockApiService';

// const mockApiService = new MockApiService();

jest.mock('../../../services/mockApiService', () => {
  return class {
    getEvents = jest.fn(() => Promise.resolve([]));
    addEvent = jest.fn();
    deleteEvent = jest.fn();
    editEvent = jest.fn();
  };
});

describe('<App />', () => {
  it('should render page', () => {
    const state = {
      firstDayOfWeek: moment('2020-02-12', 'YYYY-MM-DD'),
      listEvents: [],
      dataPoupComponent: null
    };
    const wrappedComponent = shallow(<App />);
    wrappedComponent.setState(state);
    expect(wrappedComponent).toMatchSnapshot();
  });

  it('should display Header', () => {
    const wrappedComponent = shallow(<App />);
    expect(wrappedComponent.find('Header').exists()).toBeTruthy();
  });

  it('should display ViewSchedule', () => {
    const wrappedComponent = shallow(<App />);
    expect(wrappedComponent.find('ViewSchedule').exists()).toBeTruthy();
  });

  it('should not display Popup', () => {
    const wrappedComponent = shallow(<App />);
    expect(wrappedComponent.find('Popup').exists()).toEqual(false);
  });

  it('should display Popup', () => {
    const state = {
      firstDayOfWeek: moment('2020-02-12', 'YYYY-MM-DD'),
      listEvents: [],
      dataPoupComponent: {}
    };
    const wrappedComponent = shallow(<App />);
    wrappedComponent.setState(state);
    expect(wrappedComponent.find('Popup').exists()).toEqual(true);
  });

  it('should called fetchListEvents()', () => {
    // const state = {
    //   firstDayOfWeek: '2020-02-10T00:00:00.000Z',
    //   listEvents: [],
    //   dataPoupComponent: null
    // };
    // const fetchListEvents = jest.fn();
    // const wrappedComponent = shallow(<App />);
    // wrappedComponent.state(state);
    // expect(fetchListEvents).toBeCalled();
  });
  
});