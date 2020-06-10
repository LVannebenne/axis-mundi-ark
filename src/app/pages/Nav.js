import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'

class Nav extends Component {
  render () {
    return (
        <nav>
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

            </ul>
        </nav>
    )
  }
}

export default Nav