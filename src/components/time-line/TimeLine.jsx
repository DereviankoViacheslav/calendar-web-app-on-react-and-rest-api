import React from 'react';
import './TimeLine.scss';
import moment from 'moment';

function getTop() {
  const heightOneMinute = (42 / 60);
  const now = moment();
  const startDay = moment().format('YYYY-MM-DD');
  const diffMinutes = now.diff(startDay, 'minutes');
  return diffMinutes * heightOneMinute;
}

class TimeLine extends React.Component {
  state = {
    top: getTop(),
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ top: getTop() });
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

export default TimeLine;