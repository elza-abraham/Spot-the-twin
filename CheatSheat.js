// function test() {
//   const words = ['ran', 'ate', 'are', 'what', 'with', 'all', 'but', 'she', 'be', 'yes', 'this', 'that',  'am' ]
//   console.log("some message" ,cards.length)
//   const card1 = [words[0], words[1], words[2], words[9]]
//   const card2 = [words[9], words[3], words[4], words[5]]
//   const card3 = [words[8], words[9], words[6], words[7]]
//   const card4 = [words[0], words[10], words[3], words[6]]
//   const card5 = [words[1], words[10], words[4], words[7]]
//   const card6 = [words[8], words[2], words[10], words[5]]
//   const card7 = [words[0], words[8], words[11], words[4]]
//   const card8 = [words[1], words[11], words[5], words[6]]
//   const card9 = [words[11], words[2], words[3], words[7]]
//   const card10 = [words[0], words[12], words[5], words[7]]
//   const card11 = [words[8], words[1], words[3], words[12]]
//   const card12 = [words[12], words[2], words[4], words[16]]
//   const card11 = [words[9], words[10], words[11], words[12]]

// }


//     // const card1 = [words[0], words[1], words[2], words[9]]
//     // const card2 = [words[9], words[3], words[4], words[5]]
//     // const card3 = [words[8], words[9], words[6], words[7]]
//     // const card4 = [words[0], words[10], words[3], words[6]]
//     // const card5 = [words[1], words[10], words[4], words[7]]
//     // const card6 = [words[8], words[2], words[10], words[5]]
//     // const card7 = [words[0], words[8], words[11], words[4]]
//     // const card8 = [words[1], words[11], words[5], words[6]]
//     // const card9 = [words[11], words[2], words[3], words[7]]
//     // const card10 = [words[0], words[12], words[5], words[7]]
//     // const card11 = [words[8], words[1], words[3], words[12]]
//     // const card12 = [words[12], words[2], words[4], words[6]]
//     // const card13 = [words[9], words[10], words[11], words[12]]

//     // const cardArr = [
//     //   card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13
//     // ]
// test()


// import React from 'react'

// export default class Timer extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       time: {},
//       seconds: 5,
//       timerMsg: '',
//       showTimer: false
//     };
//     this.timer = 0;
//   }

//   secondsToTime(secs){
//     const hours = Math.floor(secs / (60 * 60));
//     const divisor_for_minutes = secs % (60 * 60);
//     const minutes = Math.floor(divisor_for_minutes / 60);
//     const divisor_for_seconds = divisor_for_minutes % 60;
//     const seconds = Math.ceil(divisor_for_seconds);

//     let obj = {
//       "h": hours,
//       "m": minutes,
//       "s": seconds
//     };
//     return obj;
//   }

//   componentDidMount() {
//     // let timeLeft = this.secondsToTime(this.state.seconds);
//     let timeLeft = this.state.seconds;
//     // this.setState({ time: timeLeft });
//     this.setState({ time: timeLeft });
//   }

//   startTimer = () => {
//     this.setState({
//       showTimer: true,
//       timerMsg: ''
//     })
//     if (this.timer === 0) {
//       this.timer = setInterval(this.countDown, 1000);
//     }
//   }

//   countDown = () => {
//     // Remove one second, set state so a re-render happens.
//     let seconds = this.state.seconds - 1;
//     this.setState({
//       time: this.secondsToTime(seconds),
//       seconds: seconds,
//     });

//     // Check if we're at zero.
//     if (seconds === 0) {
//       this.setState({
//         timerMsg: 'Time up!!'
//       })

//       clearInterval(this.timer);
//       this.timer = 0;
//       this.setState({
//         time: {},
//         seconds: 5,
//       })
//     }
//   }

//   render() {
//     return (
//       <div className="timer">

//         <h1 className={this.state.showTimer ?  'flash' : 'content-hidden'}>{this.state.timerMsg} {this.state.time.s}{'       '}</h1>
//         {/* <h1 className={this.state.showTimer ?  'flash' : 'content-hidden'}>{this.state.timerMsg} {this.state.time.m}:{this.state.time.s}{'       '}</h1> */}
//         <button id= "timer-button" onClick={this.startTimer}>Start Timer</button>
//       </div>
//     );
//   }
// }

// import React from 'react'

// export default class Timer extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       time: {},
//       seconds: 60,
//       timerMsg: '',
//       showTimer: false
//     };
//     this.timer = 0;
//   }

//   secondsToTime(secs){
//     const hours = Math.floor(secs / (60 * 60));
//     const divisor_for_minutes = secs % (60 * 60);
//     const minutes = Math.floor(divisor_for_minutes / 60);
//     const divisor_for_seconds = divisor_for_minutes % 60;
//     const seconds = Math.ceil(divisor_for_seconds);

//     let obj = {
//       "h": hours,
//       "m": minutes,
//       "s": seconds
//     };
//     return obj;
//   }

//   componentDidMount() {
//     let timeLeft = this.secondsToTime(this.state.seconds);
//     this.setState({ time: timeLeft });
//   }

//   startTimer = () => {
//     this.setState({
//       showTimer: true
//     })
//     if (this.timer == 0) {
//       this.timer = setInterval(this.countDown, 1000);
//     }
//   }

//   countDown = () => {
//     // Remove one second, set state so a re-render happens.
//     let seconds = this.state.seconds - 1;
//     this.setState({
//       time: this.secondsToTime(seconds),
//       seconds: seconds,
//     });

//     // Check if we're at zero.
//     if (seconds === 0) {
//       this.setState({
//         timerMsg: "Time up!!"
//       })
//       clearInterval(this.timer);
//     }
//   }

//   render() {
//     return (
//       <div className="timer">

//         <h1 className={this.state.showTimer ?  'flash' : 'content-hidden'}>{this.state.timerMsg} {this.state.time.m}:{this.state.time.s}{'       '}</h1>
//         <button id= "timer-button" onClick={this.startTimer}>Start Timer</button>
//       </div>
//     );
//   }
// }
