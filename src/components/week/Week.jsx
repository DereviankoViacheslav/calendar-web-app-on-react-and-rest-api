import React from 'react';
import './Week.scss';
import Day from '../day';
import moment from 'moment';
import PropTypes from 'prop-types';

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
    <div className="week">
      {days}
    </div>
  );
}

Week.propTypes = {
  onShowPopup: PropTypes.func.isRequired,
  listEvents: PropTypes.array,
  date: PropTypes.object.isRequired,
}

Week.defaultProps = {
  listEvents: [],
}

export default Week;