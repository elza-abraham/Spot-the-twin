import React from 'react'
class ImageGamePage extends React.Component {
  constructor(props) {
    super(props)
    this.card1 = ['ran', 'ate', 'are', 'what']
    this.card2 = ['with', 'all', 'but', 'ran']
    this.card3 = ['what', 'all', 'she', 'be']
    this.card4 = ['all', 'yes', 'ate', 'this']
    this.card5 = ['ate', 'that', 'be', 'but']
    this.card6 = ['this', 'be', 'ran', 'am']
    this.card7 = ['but', 'yes', 'what','am']
    this.card8 = ['are', 'yes', 'be', 'with']
    this.card9 = ['am', 'all', 'that', 'are']
    this.card10 = ['ran', 'yes', 'she', 'that']
    this.card11 = ['that', 'will', 'what', 'this']
    this.card12 = ['are', 'she', 'but', 'this']
    this.card13 = ['ate','with', 'am', 'she']
    this.state = {
      cardArr: [this.card1, this.card2, this.card3, this.card4, this.card5, this.card6, this.card7, this.card8, this.card9, this.card10, this.card11, this.card12, this.card13],
      playerCard1: this.card1,
      playerCard2: this.card2,
      points: 0
    }
  }
  handleClick = (event) => {
    console.log('current clicked column', event.target.textContent)
    console.log(this.state.playerCard2)
    const selected = event.target.textContent
    if (this.state.playerCard2.indexOf(selected) > -1) {
      console.log("match found");
      let newCards = this.randomCards()
      this.setState(
        {
          points: this.state.points + 1,
          playerCard1: newCards[0],
          playerCard2: newCards[1]
        }
      )
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
      <div id="container">
        <div>{this.state.points}</div>
        <div id='game-table'>
          <div id = "card">
            {
              this.state.playerCard1.map((word, idx) =>
              <div style={{margin: '10px'}} className="square" key= {idx} onClick={this.handleClick}>{word}</div>
            )}
          </div>
          <div id = "card">
            {
              this.state.playerCard2.map((word, idx) =>
              <div style={{margin: '10px'}} className="square" key= {idx} onClick={this.handleClick}>{word}</div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ImageGamePage
