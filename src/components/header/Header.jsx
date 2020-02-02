import React from 'react';
import './Header.scss';
import moment from 'moment';
import PropTypes from 'prop-types';

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

class Header extends React.PureComponent {
  render() {
    const { date, goToday, goNextWeek, goPrevWeek, onShowPopup } = this.props;
    return (
      <header className="header">
        <nav className="navigate">
          <button onClick={(e) => onShowPopup(e)} className="navigate__btn-create">
            <svg width="36" height="36" viewBox="0 0 36 36">
              <path fill="#34A853" d="M16 16v14h4V20z"></path><path fill="#4285F4" d="M30 16H20l-4 4h14z"></path><path fill="#FBBC05" d="M6 16v4h10l4-4z"></path><path fill="#EA4335" d="M20 16V6h-4v14z"></path><path fill="none" d="M0 0h36v36H0z"></path>
            </svg>
            Create
          </button>
          <button onClick={goToday} className="navigate__btn-today">Today</button>
          <div className="navigate__arows">
            <div onClick={goPrevWeek} className="navigate__arows_left"></div>
            <div onClick={goNextWeek} className="navigate__arows_right"></div>
          </div>
          <div className="navigate__title">{getTitle(date)}</div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  onShowPopup: PropTypes.func.isRequired,
  goNextWeek: PropTypes.func.isRequired,
  goPrevWeek: PropTypes.func.isRequired,
  goToday: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired,
}

export default Header;