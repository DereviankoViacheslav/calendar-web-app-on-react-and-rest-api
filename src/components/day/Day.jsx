import React from 'react';
import Event from '../event';
import TimeLine from '../time-line';
import moment from 'moment';

function Day({ date, events, onShowPopup }) {
  const today = moment().format('YYYY-MM-DD');
  const currentDate = moment(date).format('YYYY-MM-DD');
  const isToday = moment(today).isSame(currentDate);

  const eventsList = events.map((event) => {
    return <Event key={event.id} event={event} onShowPopup={onShowPopup} />;
  });

  return (
    <div onClick={(e) => onShowPopup(e, null, date)} className="column-day">
      {eventsList}
      {isToday && <TimeLine />}
    </div>
  );
}

export default Day;