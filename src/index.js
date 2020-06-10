import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Main from './App/Main'
import './assets/style.scss'
import * as PIXI from 'pixi.js'
import { ScrollFunction } from './functions'

const container = document.querySelector('#app')

const App = () => (
  <BrowserRouter>
    <Main />
  </BrowserRouter>
)

ReactDOM.render(<App />, container)