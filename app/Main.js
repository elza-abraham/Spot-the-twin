import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import ImageGamePage from './ImageGamePage'
import MainPage from './MainPage'

export default class Main extends Component {
  render () {
    return (
      <div id='main'>
        <h1>Spot it!!</h1>
        <Route exact path='/' component={MainPage} />
        <Route path='/imageGamePage' component={ImageGamePage} />
      </div>
    )
  }
}
