import React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Dustbin from './Dustbin'
import Box from './Box'
const rowStyle = { overflow: 'hidden', clear: 'both' }

@DragDropContext(HTML5Backend)
export default class Container extends React.Component {
  render() {
    return (
      <div>
        <div style={rowStyle}>
          <Dustbin />
        </div>
        <div style={rowStyle}>
          <Box name="Glass" id="Glass" />
          <Box name="Banana" id="Banana" />
          <Box name="Paper" id="Paper"/>
        </div>
      </div>
    )
  }
}