import React from 'react';
import './Popup.scss';
import moment from 'moment';

class Popup extends React.Component {
  state = {
    name: '',
    startDate: moment().format('YYYY-MM-DD'),
    startTime: moment().format('HH:mm'),
    endDate: moment().format('YYYY-MM-DD'),
    endTime: moment().add('hours', 1).format('HH:mm'),
    description: '',
    color: '#4183f1',
  }

  componentDidMount() {
    const { event, date } = this.props;
    if (date) {
      this.setState({
        startDate: moment(date).format('YYYY-MM-DD'),
        endDate: moment(date).format('YYYY-MM-DD')
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
        color: event.color
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
    const id = this.props.event ? this.props.event.id : null;
    this.props.handleSubmit(event, id);
  }

  render() {
    const { onClosePopup } = this.props;
    const { name, color, startDate, startTime, endDate, endTime, description } = this.state;

    return (
      <div className="popup-background">
        <div onClick={onClosePopup} className="popup-layer">
        </div>
        <form onSubmit={this.handleSubmit} className="popup event">
          <span onClick={onClosePopup} className="popup__btn-close">X</span>
          <input
            className="event__name"
            name="name" type="text"
            required
            placeholder="Add title "
            value={name}
            onChange={this.onChange}
          />
          <div className="popup__color-picker">
            <label className="popup__color-picker_label">
              <span className="popup__color-picker_label-text">Select a color</span>
              <input
                className="event__color-picker"
                type="color"
                name="color"
                value={color}
                onChange={this.onChange}
              />
            </label>
          </div>
          <div className="popup__picker">
            <input
              className="event__date-start"
              name="startDate"
              required
              type="date"
              value={startDate}
              onChange={this.onChange}
            />
            <input
              className="event__time-start select"
              name="startTime"
              required
              type="time"
              step="900"
              value={startTime}
              onChange={this.onChange}
            />
            <span className="line"></span>
            <input
              className="event__time-end select"
              name="endTime"
              required
              type="time"
              step="900"
              value={endTime}
              onChange={this.onChange}
            />
            <input
              className="event__date-end"
              name="endDate"
              required
              type="date"
              value={endDate}
              onChange={this.onChange}
            />
          </div>
          <textarea
            className="event__description"
            name="description"
            placeholder="Add description"
            value={description}
            onChange={this.onChange}
          />
          <div className="footer-popup">
            <span onClick={this.onDeleteEvent} className="event__btn-delete">bascket</span>
            <button className="event__btn-save">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Popup;