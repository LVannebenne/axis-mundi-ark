import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'

class Nav extends Component {
  render () {
    return (
        <nav id="nav">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/rules/fr">Règles</a>
              </li>
              <li>
                <a href="/rules/en">Rules</a>
              </li>
              <li>
                <a href="https://discord.gg/nySUP7k" target="_blank">Discord</a>
              </li>

            </ul>
        </nav>
    )
  }
}

export default Nav