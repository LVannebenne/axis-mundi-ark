import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, useParams } from 'react-router-dom'

var titleCounter = 0;

function DynaComponent(props) {
    return (
        <div className='component'>
        {renderDyna(props.data.type, props.data.content)}
        </div>
        )
}

function UcFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function renderDyna(type, content) {
    switch (type) {
        case "title":
            content.level == 3 ? titleCounter++ : null
            return <Title className={content.className ?? ''} text={(content.level == 3 ? titleCounter.toString() + '. ' : '') + content.text} level={content.level} />
            break;
        case "paragraph":
            console.log(content)
            return <p className={content.className ?? ''}>{content.text}</p>
        case "link":
            return <a href={content.url} target={content.target}>{content.label}</a>
        case "list":
            return <List data={content} />
        case "table":
            return <Table data={content} />
        default:
            
            break;
    }
}

function Title(props) {
    let Level = `h${props.level.toString()}`
    return (
        <Level className={props.className}>{props.text}</Level>
    )
}

function List(props) {
    return (
        <ul>
            {
                props.data.map((elem, key) => {
                    return <li key={key}>{elem}</li>
                })
            }
        </ul>
    )
}
function Table(props) {
    return (
        <div className="flex-table">
            <div className="flex-table-header">
            {
                props.data.labels.map((label, key) => {
                    return <div className="flex-table-cell-header" key={key}>{label}</div>
                })
            }
            </div>
            <div className="flex-table-body">
            {
                props.data.lines.map((line, key) => {
                    return <Line data={line} key={key} />
                })
            }
            </div>
        </div>
    )
}

function Line(props) {
    return (
        <div className="flex-table-line">
            {
                props.data.map((cell, key) => {
                    return <div className="flex-table-cell" key={key}>{cell}</div>
                })
            }
        </div>
    )
}

export default DynaComponent
