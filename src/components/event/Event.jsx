import React from 'react';
import './Event.scss';
import moment from 'moment';
import PropTypes from 'prop-types';

function getStyle(event, heigthHour) {
  const heightOneMinute = heigthHour / 60;
  const startDay = moment(event.startDate).format('YYYY-MM-DD');
  const startEvent = moment(event.startDate);
  const endEvent = moment(event.endDate);
  const diffMinutes = endEvent.diff(startEvent, 'minutes');
  const top = startEvent.diff(startDay, 'minutes');

  return {
    backgroundColor: `${event.color}`,
    top: `${top * heightOneMinute}px`,
    height: `${diffMinutes * heightOneMinute}px`
  };
}

function Event({ event, onShowPopup, heigthHour }) {
  return (
    <div onClick={(e) => onShowPopup(e, event)}
      className="day-event"
      style={getStyle(event, heigthHour)}
    >
      <div className="day-event__title">{event.name}</div>
      <span>{`${moment(event.startDate).format('HH:mm')} - ${moment(event.endDate).format('HH:mm')}`}</span>
    </div>
  );
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
  onShowPopup: PropTypes.func.isRequired,
  heigthHour: PropTypes.number.isRequired,
}

Event.defaultProps = {
  title: 'Default title',
}

export default Event;