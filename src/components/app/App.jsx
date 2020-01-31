import './App.scss';
import React from 'react';
import Header from '../header'
import ViewSchedule from '../view-schedule';
import Popup from '../popup';
import MockApiService from '../../services/mockApiService';
import moment from 'moment';

class App extends React.Component {
  state = {
    firstDayOfWeek: moment().day(1),
    listEvents: [],
    dataPoupComponent: null
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

  onCreateEvent = (event) => {
    this.mockApiService.addEvent(event)
      .then(() => this.fetchListEvents());
  }

  onDeleteEvent = (id) => {
    this.mockApiService.deleteEvent(id)
      .then(() => this.fetchListEvents());
  }

  onEditEvent = (event, id) => {
    this.mockApiService.editEvent(event, id)
      .then(() => this.fetchListEvents());
  }

  goNextWeek = () => {
    this.setState((state) => {
      return { firstDayOfWeek: moment(state.firstDayOfWeek).add('days', 7) }
    });
  }

  goPrevWeek = () => {
    this.setState((state) => {
      return { firstDayOfWeek: moment(state.firstDayOfWeek).subtract('days', 7) }
    });
  }

  goToday = () => {
    this.setState((state) => {
      return { firstDayOfWeek: moment().day(1) }
    });
  }

  onShowPopup = (e, event, date) => {
    e.stopPropagation();
    this.setState({ dataPoupComponent: event || date ? { event, date } : {} });
  }

  onClosePopup = () => {
    this.setState((state) => ({ dataPoupComponent: null }));
  }

  handleSubmit = (event, id) => {
    if (id) {
      this.onEditEvent(event, id);
      return;
    }
    this.onCreateEvent(event);
  }

  render() {
    const { firstDayOfWeek, listEvents } = this.state;

    return (
      <>
        <Header
          date={firstDayOfWeek}
          goToday={this.goToday}
          goNextWeek={this.goNextWeek}
          goPrevWeek={this.goPrevWeek}
          onShowPopup={this.onShowPopup}
        />
        <main className="main">
          <ViewSchedule
            listEvents={listEvents}
            date={firstDayOfWeek}
            onShowPopup={this.onShowPopup}
          />
        </main>
        {this.state.dataPoupComponent && <Popup
          onClosePopup={this.onClosePopup}
          onDeleteEvent={this.onDeleteEvent}
          handleSubmit={this.handleSubmit}
          {...this.state.dataPoupComponent}
        />}
      </>
    );
  }
}

export default App;