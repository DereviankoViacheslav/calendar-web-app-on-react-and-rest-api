import React from 'react';
import moment from 'moment';

function DayLabel({ dates }) {
  const labels = dates.map((date) => {
    const day = moment(date, 'YYYY-MM-DD');
    const currentDate = moment().format('YYYY-MM-DD');
    const todayClass = moment(currentDate).isSame(day) ? ' today' : '';

    return (
      <div key={date} className="day">
        <span className="day_nameDay">{day.format('ddd')}</span>
        <div className={`day_numberDay${todayClass}`}>{day.format('DD')}</div>
        <div className="LittleBorder"></div>
      </div>
    );
  });

  return (
    <div className="week">
      {labels}
    </div>
  );
}

export default DayLabel;