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

function Week({ dates, listEvents }) {
  const days = dates.map((date) => {
    const events = getEventsOfDay(listEvents, date);
    return <Day key={date} date={date} events={events} />;
  });

  return (
    <div className="days">
      {days}
    </div>
  );
}

export default Week;