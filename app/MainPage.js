import React, {Component} from 'react'
import GamePage from './GamePage'
import createCards from './CardGenerator'
import randomCards from './RandomCardGen'
import {Link} from 'react-router-dom'

export default class MainPage extends Component {
  constructor () {
    super()
    this.state = {
      cardArr: [],
      shouldChildChange: true,
      errorMsg: '',
      warningMsg: '',
      flagToSendProps: true,
      word1: 'ran', word2: 'ate', word3: 'are', word4: 'what', word5: 'with',
      word6: 'all', word7: 'but',  word8: 'she',  word9: 'be', word10: 'yes',
      word11: 'this', word12: 'that', word13: 'am'
    }
  }

  componentDidMount() {
    const words = [this.state.word1, this.state.word2, this.state.word3, this.state.word4, this.state.word5, this.state.word6, this.state.word7, this.state.word8, this.state.word9, this.state.word10, this.state.word11, this.state.word12, this.state.word13 ]

    const cardArr = createCards(words)
    this.setState(
      {
        cardArr
      }
    )
  }

  handleSubmit = (event) => {

    event.preventDefault();

    const words = [this.state.word1, this.state.word2, this.state.word3, this.state.word4, this.state.word5, this.state.word6, this.state.word7, this.state.word8, this.state.word9, this.state.word10, this.state.word11, this.state.word12, this.state.word13 ]

    const hasAllEntries = words.reduce((accumulator ,word ) => {
      const trimmed = word.replace(/^\s\s*/, '').replace(/\s\s*$/, '')
      return  accumulator && trimmed !== ''
    }, true)

    if (!hasAllEntries) {
      this.setState(
        {
          errorMsg: 'You may want to fill all boxes with words!!'
        }
      )
    }

    const cardArr = createCards(words)

    this.setState(
      {
        cardArr,
        warningMsg: '',
        shouldChildChange: true
      }
    )
  }

  handleChange = (event) => {
    this.setState({
      errorMsg: '',
      shouldChildChange: false,
      warningMsg: 'Click New Game after changing',
      [event.target.name]: event.target.value
    })
  }

  render () {
    return (
      <div  id="container">
        <h4> Replace the words as required or start playing OR...<Link to={`/image-game`}>Play with images
              </Link>       </h4>
        <form onSubmit={this.handleSubmit} >
          <div  className="form-item">
            <input type= "text" name ="word1" maxLength="6" value={this.state.word1} onChange={this.handleChange} />
          </div>
          <div  className="form-item">
            <input type= "text" name ="word2" maxLength="6" value={this.state.word2} onChange={this.handleChange} />
          </div>
          <div  className="form-item">
            <input type= "text" name ="word3" maxLength="6" value={this.state.word3} onChange={this.handleChange} />
          </div>
          <div  className="form-item">
            <input type= "text" name ="word4" maxLength="6" value={this.state.word4} onChange={this.handleChange} />
          </div>
          <div  className="form-item">
            <input type= "text" name ="word5" maxLength="6" value={this.state.word5} onChange={this.handleChange} />
          </div>
          <div  className="form-item">
            <input type= "text" name ="word6" maxLength="6" value={this.state.word6} onChange={this.handleChange} />
          </div>
          <div  className="form-item">
            <input type= "text" name ="word7" maxLength="6" value={this.state.word7} onChange={this.handleChange} />
          </div>
          <div  className="form-item">
            <input type= "text" name ="word8" maxLength="6" value={this.state.word8} onChange={this.handleChange} />
          </div>
          <div  className="form-item">
            <input type= "text" name ="word9" maxLength="6" value={this.state.word9} onChange={this.handleChange} />
          </div>
          <div  className="form-item">
            <input type= "text" name ="word10" maxLength="6" value={this.state.word10} onChange={this.handleChange} />
          </div>
          <div  className="form-item">
            <input type= "text" name ="word11" maxLength="6" value={this.state.word11} onChange={this.handleChange} />
          </div>
          <div  className="form-item">
            <input type= "text" name ="word12" maxLength="6" value={this.state.word12} onChange={this.handleChange} />
          </div>
          <div  className="form-item">
            <input type= "text" name ="word13" maxLength="6" value={this.state.word13} onChange={this.handleChange} />
          </div>
          <div>
            <button type= "submit">New Game</button> {this.state.warningMsg}
            <span style={{color: 'orange'}}>{this.state.errorMsg}</span>
          </div>
        </form>
        <GamePage cardArr={this.state.cardArr} shouldChildChange={this.state.shouldChildChange} />
      </div>
    )
  }
}
