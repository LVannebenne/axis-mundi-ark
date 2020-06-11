import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, useParams } from 'react-router-dom'

function DynaComponent(props) {
    return (
        <div>
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
            return <Title text={content.text} level={content.level}/>
            break;
        case "paragraph":
            return <p>{content.text}</p>
        case "link":
            return <a href={content.url} target={content.target}>{content.label}</a>
        case "list":
            return <List data={content} />
        default:
            
            break;
    }
}

function Title(props) {
    let Level = `h${props.level.toString()}`
    return (
        <Level>{props.text}</Level>
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

export default DynaComponent
