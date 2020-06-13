import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, useParams } from 'react-router-dom'
import RulesFr from '../rules-fr.json'
import RulesEn from '../rules-en.json'
import HomeMulti from '../home-multi.json'

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
          <div id="logo"></div>
          <h1 id="title" className='no-border'>ARK Survival Evolved Servers Cluster</h1>
        </header>
        
        <Nav />
        <Route exact={true} path="/" >
          <Home content={HomeMulti} />
        </Route>
        <Route path="/rules/fr" > 
          <Rules content={RulesFr} />
        </Route>
        <Route path="/rules/en" > 
          <Rules content={RulesEn} />
        </Route>
        {/* <Route path="/portfolio" component={Portfolio}/> */}<div id="scroll"></div>
      </div>
    )
  }
}

export default Main