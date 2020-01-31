import React from 'react';
import './Header.scss';
import moment from 'moment';

function getTitle(date) {
  const day = moment(date);
  const startNameMonth = day.format('MMM');
  const startNameYear = day.format('YYYY');
  const lastNameMonth = moment(day).add('days', 6).format('MMM');
  const lastNameYear = moment(day).add('days', 6).format('YYYY');
  const year = startNameYear !== lastNameYear ? startNameYear : '';
  const month = startNameMonth !== lastNameMonth ? '- ' + lastNameMonth : '';
  return `${startNameMonth} ${year} ${month} ${lastNameYear}`;
}

function Header({ date, goToday, goNextWeek, goPrevWeek, onShowPopup }) {

  return (
    <header className="head">
      <nav className="navigate">
        <button onClick={(e) => onShowPopup(e)} className="navigate_create">Create</button>
        <button onClick={goToday} className="navigate_today">Today</button>
        <div className="navigate__arows">
          <div onClick={goPrevWeek} className="navigate__arows_left"></div>
          <div onClick={goNextWeek} className="navigate__arows_right"></div>
        </div>
        <div className="navigate__MonthAndYear">{getTitle(date)}</div>
      </nav>
    </header>
  );
}

export default Header;