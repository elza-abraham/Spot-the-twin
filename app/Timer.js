import React from 'react'

export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: {},
      seconds: 10,
      timerMsg: '',
      showTimer: false
    };
    this.timer = 0;
  }

  secondsRemaining(secs){
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

    let timeLeft = this.state.seconds;
    this.setState({ time: timeLeft });
  }

  startTimer = () => {
    this.props.resetGame();
    this.setState({
      showTimer: true,
      timerMsg: ''
    })
    if (this.timer === 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown = () => {

    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsRemaining(seconds),
      seconds: seconds,
    });

    if (seconds === 0) {
      this.setState({
        timerMsg: 'Time Up!!'
      })

      clearInterval(this.timer);
      this.timer = 0;
      this.setState({
        time: {},
        seconds: 10,
      })
    }
  }

  render() {
    return (
      <div className="timer">
        <div className="timer-child">
          <h2 className={this.state.showTimer ?  'flash' : 'content-hidden'}>{this.state.timerMsg} {this.state.time.s}</h2>
        </div>
        <div className="timer-child">
          <button id= "timer-button" onClick={this.startTimer}>Timer</button>
        </div>
      </div>
    );
  }
}
