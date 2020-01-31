import React from 'react';
import './DayLabel.scss';
import moment from 'moment';

function DayLabel({ date }) {
  let nextDay = moment(date).format('YYYY-MM-DD');
  const labels = [...new Array(7)].map(() => {
    const today = moment().format('YYYY-MM-DD');
    const todayStyle = moment(today).isSame(nextDay) ? ' today' : '';
    const labelElem = (
      <div key={nextDay} className="day">
        <span className="day_nameDay">{moment(nextDay).format('ddd')}</span>
        <div className={`day_numberDay${todayStyle}`}>{moment(nextDay).format('DD')}</div>
        <div className="LittleBorder"></div>
      </div>);
    nextDay = moment(nextDay).add('days', 1).format('YYYY-MM-DD');
    return labelElem;
  });

  return (
    <div className="week">
      {labels}
    </div>
  );
}

export default DayLabel;