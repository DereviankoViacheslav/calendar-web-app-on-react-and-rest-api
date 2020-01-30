import React from 'react';

function Header() {
  return (
    <header className="head">
      <nav className="navigate">
        <button className="navigate_create">Create</button>
        <button className="navigate_today">Today</button>
        <div className="navigate__arows">
          <div className="navigate__arows_left"></div>
          <div className="navigate__arows_right"></div>
        </div>
        <div className="navigate__MonthAndYear">Jan - Feb 2020</div>
      </nav>
    </header>
  );
}

export default Header;
