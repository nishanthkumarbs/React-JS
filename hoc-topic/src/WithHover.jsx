import React from 'react'
import HOC from './HOC'

const WithHover = (props) => {
  return (
    <div>
        <h1 onMouseOver={props.handleCount}>Hovered {props.count} times </h1>
    </div>
  )
}

export default HOC(WithHover)