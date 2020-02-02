import React from 'react';
import './Day.scss';
import Event from '../event';
import TimeLine from '../time-line';
import moment from 'moment';
import PropTypes from 'prop-types';

const HEIGTH_HOUR = 42;

function getSelectedDate(e, date) {
  const coordinatY = e.nativeEvent.layerY;
  const hours = Math.trunc(coordinatY / HEIGTH_HOUR);
  const countMinutes = (coordinatY - (HEIGTH_HOUR * hours)) / (HEIGTH_HOUR / 60);
  const minutes = (countMinutes - (countMinutes % 15)) + 15;
  return moment(date).hours(hours).minutes(minutes).format();
}

function isToday(date) {
  const today = moment().format('YYYY-MM-DD');
  const currentDate = moment(date).format('YYYY-MM-DD');
  return moment(today).isSame(currentDate);
}

class Day extends React.Component {
  shouldComponentUpdate(nextProps) {
    const isEmptyOldListEvents = this.props.events.length === 0;
    const isEmptyNewListEvents = nextProps.events.length === 0;
    const isSameDate = this.props.date === nextProps.date;
    if (isEmptyOldListEvents && isEmptyNewListEvents && isSameDate) return false;
    return true;
  }

  handleClick = (e) => {
    const selectedDate = getSelectedDate(e, this.props.date)
    this.props.onShowPopup(e, null, selectedDate);
  }

  render() {
    const eventsList = this.props.events.map((event) => {
      return <Event key={event.id} event={event} onShowPopup={this.props.onShowPopup} />;
    });

    return (
      <div onClick={this.handleClick} className="column-day">
        {eventsList}
        {isToday(this.props.date) && <TimeLine heigthHour={HEIGTH_HOUR}/>}
      </div>
    );
  }
}

Day.propTypes = {
  date: PropTypes.string.isRequired,
  events: PropTypes.array.isRequired,
  onShowPopup: PropTypes.func.isRequired,
}

export default Day;