import React from 'react'

export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: {},
      seconds: 60,
      timerMsg: ''
    };
    this.timer = 0;
  }

  secondsToTime(secs){
    const hours = Math.floor(secs / (60 * 60));
    const divisor_for_minutes = secs % (60 * 60);
    const minutes = Math.floor(divisor_for_minutes / 60);
    const divisor_for_seconds = divisor_for_minutes % 60;
    const seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeft = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeft });
  }

  startTimer = () => {
    if (this.timer == 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown = () => {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds === 0) {
      this.setState({
        timerMsg: "Time up!!"
      })
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div className="timer">
        <h1 className="flash">{this.state.timerMsg} {this.state.time.m}:{this.state.time.s}{'       '}
        <button id= "timer-button" onClick={this.startTimer}>Start Timer</button></h1>
      </div>
    );
  }
}
