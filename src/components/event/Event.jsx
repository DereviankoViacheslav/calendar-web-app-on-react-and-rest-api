import React from 'react';
import moment from 'moment';

function getStyle(event) {
  const heightOneMinute = (42 / 60);
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

function Event({ event }) {
  return (
    <div data-id-event="3" className="day-event" style={getStyle(event)}>
      <div className="day-event__title">{event.name}</div>
      <span>{`${moment(event.startDate).format('HH:mm')} - ${moment(event.endDate).format('HH:mm')}`}</span>
    </div>
  );
}

export default Event;