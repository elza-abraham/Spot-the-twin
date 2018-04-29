import React from 'react'
import randomCards from './RandomCardGen'
import createCards from './CardGenerator'
import {Link} from 'react-router-dom'

class ImageGamePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cardArr: [],
      playerCard1: [],
      playerCard2: [],
      word1: '/images/sun.jpeg', word2: '/images/balloon.jpeg', word3: '/images/bee.png', word4: '/images/butterfly.jpeg', word5: '/images/dog.jpeg',
      word6: '/images/fish.png', word7: '/images/flower.jpeg',  word8: '/images/lion.png',  word9: '/images/monkey.png', word10: '/images/penguin.png',
      word11: '/images/rainbow.png', word12: '/images/reindeer.png', word13: '/images/stars.jpeg',
      score: 0
    }
  }

  componentDidMount() {
    const words = [this.state.word1, this.state.word2, this.state.word3, this.state.word4, this.state.word5, this.state.word6, this.state.word7, this.state.word8, this.state.word9, this.state.word10, this.state.word11, this.state.word12, this.state.word13 ]

    const cardArr = createCards(words)
    const [playerCard1, playerCard2] = randomCards(cardArr)

    this.setState(
      {
        cardArr,
        playerCard1,
        playerCard2
      }
    )
  }


  handleClick = (event) => {
    const selected = event.target.src.slice(event.target.src.lastIndexOf('/images'))

    if (this.state.playerCard2.indexOf(selected) > -1) {
      let [playerCard1, playerCard2] = randomCards(this.state.cardArr)

      this.setState(
        {
          score: this.state.score + 1,
          playerCard1,
          playerCard2
        }
      )
    }
  }

  handleReset = () => {
    let [playerCard1, playerCard2] = randomCards(this.state.cardArr)

    this.setState(
      {
        score: 0,
        playerCard1,
        playerCard2
      }
    )
  }

  render () {
    return (
      <div id="container">
        <div id="game-table">
          <h3 className="emoji">Your card </h3>
          <h4>Score: {this.state.score} </h4>
        </div>
        <div id="game-table">
          <div id = "playerCard">
            {
              this.state.playerCard1.map((word, idx) =>
              <img  className="player-square" key= {idx} src={word}  onClick={this.handleClick} />
            )}
          </div>
          <div id = "non-player-card">
            {
              this.state.playerCard2.map((word, idx) =>
              <img  className="non-player-square" key= {idx} src={word} />
            )}
          </div>
        </div>
        <div>
          <button id= "reset-button" onClick={this.handleReset}>Reset Game</button>
        </div>
        <div><Link to="/">Back</Link></div>
    </div>
    )
  }
}

export default ImageGamePage
