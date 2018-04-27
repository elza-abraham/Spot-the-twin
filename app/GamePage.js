import React from 'react'
import Timer from './Timer'

class GamePage extends React.Component {
  constructor() {
    super()
    this.state = {
      cardArr: [],
      playerCard1: [],
      playerCard2: [],
      points: 0,
      selectedWord: ''
    }
  }

  componentWillReceiveProps = (props) => {
    this.setState({
      cardArr: props.cardArr,
      playerCard1: props.cardArr[0],
      playerCard2: props.cardArr[1]
    });
  }

  handleClick = (event) => {
    // console.log('current clicked column', event.target.textContent)

    const selected = event.target.textContent
    if (this.state.playerCard2.indexOf(selected) > -1) {
      this.setState({
        selectedWord: selected
      })
      let newCards = this.randomCards()
      setTimeout(() => {
        this.setState(
          {
            points: this.state.points + 1,
            playerCard1: newCards[0],
            playerCard2: newCards[1],
            selectedWord: ''
          }
        )
      }, 500)
    }
  }

  randomCards = () => {
    let newArr = this.shuffleCardArray()
    return [newArr[0], newArr[1]]
  }

  shuffleCardArray = () => {
    const arrayToShuffle = this.state.cardArr;
    for (let i = arrayToShuffle.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arrayToShuffle[i], arrayToShuffle[j]] = [arrayToShuffle[j], arrayToShuffle[i]];
    }
    return arrayToShuffle;
  }

  render () {
    return (
      <div id ="main-containter">
        <div><h4>Points: {this.state.points} </h4></div>
        <Timer />
        <div id="game-table">
          <div id = "card">
            {
              this.state.playerCard1.map((word, idx) =>
                <div className="square" key= {idx}  style={{backgroundColor: (this.state.selectedWord === word) ? 'rgb(118, 206, 204)' : ''}} onClick={this.handleClick}>{word}</div>
            )}
          </div>
          <div id = "card">
            {
              this.state.playerCard2.map((word, idx) =>
                <div className="square" key= {idx}  style={{backgroundColor: (this.state.selectedWord === word) ? 'rgb(118, 206, 204)' : ''}}>{word}</div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default GamePage
