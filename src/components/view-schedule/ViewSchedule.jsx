import React from 'react';
import './ViewSchedule.scss';
import Sidebar from '../sidebar'
import Week from '../week';
import DayLabel from '../day-label';
import PropTypes from 'prop-types';

function ViewSchedule({ date, listEvents, onShowPopup }) {
  return (
    <>
      <DayLabel date={date} />
      <div className="schedule">
        <Sidebar />
        <Week listEvents={listEvents} date={date} onShowPopup={onShowPopup} />
      </div>
    </>
  );
}

ViewSchedule.propTypes = {
  onShowPopup: PropTypes.func.isRequired,
  listEvents: PropTypes.array,
  date: PropTypes.object.isRequired,
}

ViewSchedule.defaultProps = {
  listEvents: [],
}

export default ViewSchedule;