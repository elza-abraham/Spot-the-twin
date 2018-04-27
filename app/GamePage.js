import React from 'react'
import Timer from './Timer'
import randomCards from './RandomCardGen'

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
      // let newCards = this.randomCards()
      let newCards = randomCards(this.state.cardArr)
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

  render () {
    return (
      <div id ="main-containter">
        <div><h4>Score: {this.state.points} </h4></div>
        <Timer />
        <h3  className="smiley"> Your card </h3>
        <div id="game-table">
          <div id = "playerCard">
            {
              this.state.playerCard1.map((word, idx) =>
                <div className="square" key= {idx}  style={{backgroundColor: (this.state.selectedWord === word) ? 'rgb(118, 206, 204)' : ''}} onClick={this.handleClick}>{word}</div>
            )}
          </div>
          <div id = "card">
            {
              this.state.playerCard2.map((word, idx) =>
                <div className="non-player-square" key= {idx}  style={{backgroundColor: (this.state.selectedWord === word) ? 'rgb(118, 206, 204)' : ''}}>{word}</div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default GamePage
