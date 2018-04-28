// import React from 'react'
// import ReactDOM from 'react-dom'
// import {Route} from 'react-router-dom'
// import MainPage from './MainPage'

// ReactDOM.render(
//   <MainPage />,
//   document.getElementById('app')
// )


import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'
import {HashRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('app')
)
