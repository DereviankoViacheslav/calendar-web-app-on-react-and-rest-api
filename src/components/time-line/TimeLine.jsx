import React from 'react';
import './TimeLine.scss';
import moment from 'moment';
import PropTypes from 'prop-types';

function getTop(heigthHour) {
  const now = moment();
  const startDay = moment().format('YYYY-MM-DD');
  const diffMinutes = now.diff(startDay, 'minutes');
  return diffMinutes * (heigthHour / 60);
}

class TimeLine extends React.Component {
  state = {
    top: getTop(this.props.heigthHour),
  }
  
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ top: getTop(this.props.heigthHour) });
    }, 60000);
  }
  
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  
  render() {
    return (
      <div className="time-line" style={{ top: this.state.top }} />
      );
    }
  }

  TimeLine.propTypes = {
    heigthHour: PropTypes.number.isRequired,
  }
  
  export default TimeLine;