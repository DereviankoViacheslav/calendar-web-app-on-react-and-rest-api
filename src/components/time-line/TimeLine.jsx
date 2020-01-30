import React from 'react';
import moment from 'moment';

function getStyle() {
  const heightOneMinute = (42 / 60);
  const now = moment();
  const startDay = moment().format('YYYY-MM-DD');
  const diffMinutes = now.diff(startDay, 'minutes');
  return { top: `${diffMinutes * heightOneMinute}px` }
}

class TimeLine extends React.Component {
  state = {
    style: getStyle(),
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ currentTime: getStyle() })
    }, 60000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="time-line" style={this.state.style} />
    );
  }
}

export default TimeLine;