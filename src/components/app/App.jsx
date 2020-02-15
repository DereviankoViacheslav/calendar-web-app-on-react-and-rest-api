import React from 'react';
import './App.scss';
import Header from '../header'
import ViewSchedule from '../view-schedule';
import Popup from '../popup';
import MockApiService from '../../services/mockApiService';
import validator from '../../validator/validator';
import moment from 'moment';

const mockApiService = new MockApiService();

moment.updateLocale('en', {
  week: {
    dow: 1,
    doy: 4
  }
});

class App extends React.Component {
  state = {
    firstDayOfWeek: moment().startOf('week'),
    listEvents: [],
    dataPoupComponent: null
  };

  componentDidMount() {
    this.fetchListEvents();
  }

  fetchListEvents = () => {
    mockApiService.getEvents()
      .then(listEvents => {
        this.setState({ listEvents });
      });
  }

  onCreateEvent = (event) => {
    mockApiService.addEvent(event)
      .then(() => this.fetchListEvents());
  }

  onDeleteEvent = (id) => {
    this.onClosePopup();
    mockApiService.deleteEvent(id)
      .then(() => this.fetchListEvents());
  }

  onEditEvent = (event) => {
    mockApiService.editEvent(event)
      .then(() => this.fetchListEvents());
  }

  goNextWeek = () => {
    this.setState((state) => {
      return { firstDayOfWeek: moment(state.firstDayOfWeek).add(7, 'days') }
    });
  }

  goPrevWeek = () => {
    this.setState((state) => {
      return { firstDayOfWeek: moment(state.firstDayOfWeek).subtract('days', 7) }
    });
  }

  goToday = () => {
    this.setState({ firstDayOfWeek: moment().startOf('week') });
  }

  onShowPopup = (e, event, date) => {
    e.stopPropagation();
    this.setState({ dataPoupComponent: event || date ? { event, date } : {} });
  }

  onClosePopup = () => {
    this.setState((state) => ({ dataPoupComponent: null }));
  }

  handleSubmit = (event) => {
    if (!validator(this.state.listEvents, event)) return;
    if (event.id) {
      this.onEditEvent(event);
    } else {
      this.onCreateEvent(event);
    }
    this.onClosePopup();
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