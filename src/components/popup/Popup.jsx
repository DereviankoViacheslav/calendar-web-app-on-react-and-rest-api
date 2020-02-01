import React from 'react';
import './Popup.scss';
import FormCreateEvent from '../form-create-event';
import moment from 'moment';

class Popup extends React.Component {
  state = {
    name: '',
    startDate: moment().format('YYYY-MM-DD'),
    startTime: `${moment().add('hours', 1).format('HH')}:00`,
    endDate: moment().format('YYYY-MM-DD'),
    endTime: `${moment().add('hours', 2).format('HH')}:00`,
    description: '',
    color: '#4183f1',
    isShowTrashIcon: false
  }

  componentDidMount() {
    const { event, date } = this.props;
    if (date) {
      this.setState({
        startDate: moment(date).format('YYYY-MM-DD'),
        startTime: moment(date).format('HH:mm'),
        endDate: moment(date).format('YYYY-MM-DD'),
        endTime: moment(date).add('hours', 1).format('HH:mm'),
      });
    }
    if (event) {
      this.setState({
        name: event.name,
        startDate: moment(event.startDate).format('YYYY-MM-DD'),
        startTime: moment(event.startDate).format('HH:mm'),
        endDate: moment(event.endDate).format('YYYY-MM-DD'),
        endTime: moment(event.endDate).format('HH:mm'),
        description: event.description,
        color: event.color,
        isShowTrashIcon: true
      });
    }
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onDeleteEvent = () => {
    if (this.props.event) {
      this.props.onDeleteEvent(this.props.event.id)
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, color, startDate, startTime, endDate, endTime, description } = this.state;
    const startDateResult = moment(startDate + 'T' + startTime).format();
    const endDateResult = moment(endDate + 'T' + endTime).format();
    const event = {
      createDate: moment().format(),
      startDate: startDateResult,
      endDate: endDateResult,
      description,
      color,
      name,
    };
    if (this.props.event) event.id = this.props.event.id;
    this.props.handleSubmit(event);
  }

  render() {
    return (
      <div className="popup-background">
        <div onClick={this.props.onClosePopup} className="popup-layer" />
        <FormCreateEvent {...this.state}
          onDeleteEvent={this.onDeleteEvent}
          handleSubmit={this.handleSubmit}
          onClosePopup={this.props.onClosePopup}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Popup;