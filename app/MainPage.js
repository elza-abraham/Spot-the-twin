import React, {Component} from 'react'
import GamePage from './GamePage'

export default class MainPage extends Component {
  constructor () {
    super()
    this.state = {
      cardArr: [],
      word1: 'ran',
      word2: 'ate',
      word3: 'are',
      word4: 'what',
      word5: 'with',
      word6: 'all',
      word7: 'but',
      word8: 'she',
      word9: 'be',
      word10: 'yes',
      word11: 'this',
      word12: 'that',
      word13: 'am'
    }
  }

  componentDidMount() {

    const words = [this.state.word1, this.state.word2, this.state.word3, this.state.word4, this.state.word5, this.state.word6, this.state.word7, this.state.word8, this.state.word9, this.state.word10, this.state.word11, this.state.word12, this.state.word13 ]

    const card1 = [words[0], words[1], words[2], words[9]]
    const card2 = [words[9], words[3], words[4], words[5]]
    const card3 = [words[8], words[9], words[6], words[7]]
    const card4 = [words[0], words[10], words[3], words[6]]
    const card5 = [words[1], words[10], words[4], words[7]]
    const card6 = [words[8], words[2], words[10], words[5]]
    const card7 = [words[0], words[8], words[11], words[4]]
    const card8 = [words[1], words[11], words[5], words[6]]
    const card9 = [words[11], words[2], words[3], words[7]]
    const card10 = [words[0], words[12], words[5], words[7]]
    const card11 = [words[8], words[1], words[3], words[12]]
    const card12 = [words[12], words[2], words[4], words[6]]
    const card13 = [words[9], words[10], words[11], words[12]]

    this.setState(
      {
        cardArr: [
          card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13
        ]
      }
    )
  }

  handleSubmit = (event) => {

    event.preventDefault();

    const words = [this.state.word1, this.state.word2, this.state.word3, this.state.word4, this.state.word5, this.state.word6, this.state.word7, this.state.word8, this.state.word9, this.state.word10, this.state.word11, this.state.word12, this.state.word13 ]

    const card1 = [words[0], words[1], words[2], words[9]]
    const card2 = [words[9], words[3], words[4], words[5]]
    const card3 = [words[8], words[9], words[6], words[7]]
    const card4 = [words[0], words[10], words[3], words[6]]
    const card5 = [words[1], words[10], words[4], words[7]]
    const card6 = [words[8], words[2], words[10], words[5]]
    const card7 = [words[0], words[8], words[11], words[4]]
    const card8 = [words[1], words[11], words[5], words[6]]
    const card9 = [words[11], words[2], words[3], words[7]]
    const card10 = [words[0], words[12], words[5], words[7]]
    const card11 = [words[8], words[1], words[3], words[12]]
    const card12 = [words[12], words[2], words[4], words[6]]
    const card13 = [words[9], words[10], words[11], words[12]]

    this.setState(
      {
        cardArr: [
          card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13
        ]
      }
    )
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render () {
    console.log("current state", this.state)
    return (
      <div  id="container">
        <h3> Replace the words as required</h3>
        <form onSubmit={this.handleSubmit}>
              <div  className="form-item">
                <input type= "text" name ="word1" value={this.state.word1} onChange={this.handleChange} />
              </div>
              <div  className="form-item">
                <input type= "text" name ="Word2" value={this.state.word2} onChange={this.handleChange} />
              </div>
              <div  className="form-item">
                <input type= "text" name ="word3" value={this.state.word3} onChange={this.handleChange} />
              </div>
              <div  className="form-item">
                <input type= "text" name ="word4" value={this.state.word4} onChange={this.handleChange} />
              </div>
              <div  className="form-item">
                <input type= "text" name ="word5" value={this.state.word5} onChange={this.handleChange} />
              </div>
              <div  className="form-item">
                {/* <label htmlFor="word6">Word6</label> */}
                <input type= "text" name ="word6" value={this.state.word6} onChange={this.handleChange} />
              </div>
              <div  className="form-item">
                <input type= "text" name ="word7" value={this.state.word7} onChange={this.handleChange} />
              </div>
              <div  className="form-item">
                <input type= "text" name ="word8" value={this.state.word8} onChange={this.handleChange} />
              </div>
              <div  className="form-item">
                <input type= "text" name ="word9" value={this.state.word9} onChange={this.handleChange} />
              </div>
              <div  className="form-item">
                <input type= "text" name ="word10" value={this.state.word10} onChange={this.handleChange} />
              </div>
              <div  className="form-item">
                <input type= "text" name ="word11" value={this.state.word11} onChange={this.handleChange} />
              </div>
              <div  className="form-item">
                <input type= "text" name ="word12" value={this.state.word12} onChange={this.handleChange} />
              </div>
              <div  className="form-item">
                <input type= "text" name ="word13" value={this.state.word13} onChange={this.handleChange} />
              </div>
            <div>
              <button type= "submit">Submit</button>
            </div>
        </form>
        <GamePage cardArr={this.state.cardArr} />
      </div>
    )
  }
}
