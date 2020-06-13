import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'

import DynaComponent from './DynaComponent'

class Home extends Component {
  render () {
    let components = this.props.content.components
    return (
        <div id="home">
            {components.map((elem, key) => {
                return <DynaComponent data={elem} key={key} />
            })}
        </div>
    )
  }
}

export default Home