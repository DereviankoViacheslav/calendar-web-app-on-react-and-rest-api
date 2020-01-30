import './App.scss';
import React from 'react';
import Header from '../header'
import ViewSchedule from '../view-schedule';
import Popup from '../popup';
import MockApiService from '../../services/mockApiService';

class App extends React.Component {
  state = {
    dates: [
      '2020-01-27',
      '2020-01-28',
      '2020-01-29',
      '2020-01-30',
      '2020-01-31',
      '2020-02-01',
      '2020-02-02',
    ],
    listEvents: []
  };
  mockApiService = new MockApiService();

  componentDidMount() {
    this.fetchListEvents();
  }

  fetchListEvents = () => {
    this.mockApiService.getEvents()
      .then(listEvents => {
        this.setState({ listEvents });
      });
  }

  // onCreate = (text) => {
  // const patern = {
  //   name: 'Event 1',
  //   createDate: '2020-01-29T07:00:00.000Z',
  //   startDate: '2020-01-29T07:00:00.000Z',
  //   endDate: '2020-01-29T11:15:00.000Z',
  //   description: 'description text',
  //   color: '#f14141',
  // }
  //   this.mockApiService.addEvent(text)
  //     .then(() => this.fetchListEvents());
  // }

  // onDelete = (taskId) => {
  //   this.mockApiService.deleteEvent(taskId)
  //     .then(() => this.fetchListEvents());
  // }

  // onEdit = (taskId) => {
  //   this.mockApiService.editEvent(taskId)
  //     .then(() => this.fetchListEvents());
  // }

  render() {
    const { dates, listEvents } = this.state;

    return (
      <>
        <Header />
        <main className="main">
          <ViewSchedule listEvents={listEvents} dates={dates} />
        </main>
        <Popup />
      </>
    );
  }
}

export default App;