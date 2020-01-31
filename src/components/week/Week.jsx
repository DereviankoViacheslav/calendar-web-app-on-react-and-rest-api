import React from 'react';
import Day from '../day';
import moment from 'moment';

function getEventsOfDay(events, date) {
  return events.filter((event) => {
    const endDateEvent = moment(event.endDate, 'YYYY-MM-DD');
    const currentDay = moment(date, 'YYYY-MM-DD');
    return moment(currentDay).isSame(endDateEvent);
  });
}

function Week({ date, listEvents, onShowPopup }) {
  let nextDay = moment(date).format('YYYY-MM-DD');
  const days = [...new Array(7)].map(() => {
    const events = getEventsOfDay(listEvents, nextDay);
    const dayElem = <Day key={nextDay} date={nextDay} events={events} onShowPopup={onShowPopup} />;
    nextDay = moment(nextDay).add('days', 1).format('YYYY-MM-DD');
    return dayElem;
  });

  return (
    <div className="days">
      {days}
    </div>
  );
}

export default Week;