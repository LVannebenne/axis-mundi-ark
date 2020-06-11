import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, useParams } from 'react-router-dom'

import DynaComponent from './DynaComponent'

class Rules extends Component {
    render () {
        let components = this.props.content.components
        return (
        <div className="rules">
            {components.map((elem, key) => {
                return <DynaComponent data={elem} key={key} />
            })}
        </div>
        );
    }
}

export default Rules