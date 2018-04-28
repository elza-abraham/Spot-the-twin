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
      score: 0,
      selectedWord: ''
    }
  }

  componentWillReceiveProps = (props) => {
    if (props.shouldChildChange){
      const [playerCard1, playerCard2] = randomCards(props.cardArr)
      this.setState({
        cardArr: props.cardArr,
        score: 0,
        playerCard1,
        playerCard2
      })
    }
  }

  handleClick = (event) => {

    const selected = event.target.textContent
    if (this.state.playerCard2.indexOf(selected) > -1) {
      this.setState({
        selectedWord: selected
      })
      const [playerCard1, playerCard2] = randomCards(this.state.cardArr)
      setTimeout(() => {
        this.setState(
          {
            score: this.state.score + 1,
            playerCard1,
            playerCard2,
            selectedWord: ''
          }
        )
      }, 500)
    }
  }

  resetGame = () => {
    this.setState({
      score: 0
    })
  }

  render () {
    return (
      <div id ="main-containter">
        <h4>Score: {this.state.score} </h4>
        <Timer resetGame={this.resetGame} />
        <h3  className="smiley"> Your card </h3>
        <div id="game-table">
          <div id = "playerCard">
            {
              this.state.playerCard1.map((word, idx) =>
                <div className="player-square" key= {idx}  style={{backgroundColor: (this.state.selectedWord === word) ? 'rgb(207, 238, 232)' : ''}} onClick={this.handleClick}>{word}</div>
            )}
          </div>
          <div id = "non-player-card">
            {
              this.state.playerCard2.map((word, idx) =>
                <div className="non-player-square" key= {idx}  style={{backgroundColor: (this.state.selectedWord === word) ? 'rgb(207, 238, 232)' : ''}}>{word}</div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default GamePage
