import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'

// import About from './pages/About'
import Nav from './pages/Nav'
import Home from './pages/Home'
// import Portfolio from './pages/Portfolio'

class Main extends Component {
  render () {
    return (
      <div className="wrapper main-background">
        <header id="header" >
          <Nav />
        </header>

        <Route exact={true} path="/" component={Home}/>
        {/* <Route path="/about" component={About}/> */}
        {/* <Route path="/contact" component={Contact}/> */}
        {/* <Route path="/portfolio" component={Portfolio}/> */}

      </div>
    )
  }
}

export default Main