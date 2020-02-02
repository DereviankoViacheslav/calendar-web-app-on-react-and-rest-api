import React from 'react';
import './DayLabel.scss';
import moment from 'moment';
import PropTypes from 'prop-types';

class DayLabel extends React.PureComponent {
  render() {
    let nextDay = moment(this.props.date).format('YYYY-MM-DD');
    const labels = [...new Array(7)].map(() => {
      const today = moment().format('YYYY-MM-DD');
      const todayStyle = moment(today).isSame(nextDay) ? ' today' : '';
      const labelElem = (
        <div key={nextDay} className="label-day">
          <span className="label-day__title">{moment(nextDay).format('ddd')}</span>
          <div className={`label-day__date${todayStyle}`}>{moment(nextDay).format('DD')}</div>
          <div className="decor-line"></div>
        </div>);
      nextDay = moment(nextDay).add('days', 1).format('YYYY-MM-DD');
      return labelElem;
    });
    
    return (
      <div className="labels">
        {labels}
      </div>
    );
  }
}

DayLabel.propTypes = {
  date: PropTypes.object.isRequired,
}

export default DayLabel;