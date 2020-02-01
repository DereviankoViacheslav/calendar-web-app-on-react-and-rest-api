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
  
  const HEIGTH_HOUR = 42;
  const HEIGTH_MINUTE = HEIGTH_HOUR / 60;
  
  function handleClick(e) {
    const coordinatY = e.nativeEvent.layerY;
    const hours = Math.trunc(coordinatY / HEIGTH_HOUR);
    const countMinutes = (coordinatY - (HEIGTH_HOUR * hours)) / HEIGTH_MINUTE;
    const minutes = (countMinutes - (countMinutes % 15)) + 15;
    const resultDate = moment(date).hours(hours).minutes(minutes).format();
    onShowPopup(e, null, resultDate);
  }

  return (
    <div onClick={handleClick} className="column-day">
      {eventsList}
      {isToday && <TimeLine />}
    </div>
  );
}

export default Day;