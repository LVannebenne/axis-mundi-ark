import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, useParams } from 'react-router-dom'
import RulesFr from '../rules-fr.json'

// import About from './pages/About'
import Nav from './pages/Nav'
import Home from './pages/Home'
import Rules from './pages/Rules'
// import Portfolio from './pages/Portfolio'

class Main extends Component {
  render () {
    return (
      <div className="wrapper main-background">
        <canvas id="canvas"></canvas>
        <header id="header" >
          <h1 id="title">ARK Survival Evolved Servers Cluster</h1>
        </header>
        <div id="scroll"></div>
        <Nav />
        <Route exact={true} path="/" component={Home}/>
        <Route path="/rules/fr" > 
          <Rules content={RulesFr} />
        </Route>
        {/* <Route path="/portfolio" component={Portfolio}/> */}
      </div>
    )
  }
}

export default Main