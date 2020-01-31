import React from 'react';
import './ViewSchedule.scss';
import Sidebar from '../sidebar'
import Week from '../week';
import DayLabel from '../day-label';

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

export default ViewSchedule;