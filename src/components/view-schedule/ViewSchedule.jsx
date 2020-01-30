import React from 'react';
import Sidebar from '../sidebar'
import Week from '../week';
import DayLabel from '../day-label';

function ViewSchedule({ dates, listEvents }) {
  return (
    <>
      <DayLabel dates={dates} />
      <div className="schedule">
        <Sidebar />
        <Week listEvents={listEvents} dates={dates} />
      </div>
    </>
  );
}

export default ViewSchedule;