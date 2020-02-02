import React from 'react';
import './Sidebar.scss';

class Sidebar extends React.PureComponent {
  render() {
    const arrHoursElems = [...new Array(24)].map((el, index) => (
      <div key={index} className="hour">
        <span className="hour__text">{`${(index < 10) ? `0${index}` : index}:00`}</span>
      </div>));

return (
      <div className="sidebar">
        {arrHoursElems}
      </div>
    );
  }
}

export default Sidebar;