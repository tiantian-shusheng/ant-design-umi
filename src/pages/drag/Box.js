import React from 'react'
import { DragSource } from 'react-dnd'
import ItemTypes from './ItemTypes'
import styles from '../index.less'
const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
  position: 'absolute'
}

const SourceSpec = {
  beginDrag: (props, monitor, component) => {
    return {
      name: props.name, id: props.id
    }
  },
  endDrag(props, monitor) {
    const item = monitor.getItem()
    const dropResult = monitor.getDropResult()
    // console.log(dropResult)
    // const DragDIV = document.getElementById(item.id)
    // console.log(DragDIV.offsetLeft);
    // console.log(monitor.getDifferenceFromInitialOffset())
    // if (dropResult) {
    //   alert(`You dropped ${item.name} into ${dropResult.name}!`)
    // }
  },
}

@DragSource(ItemTypes.BOX, SourceSpec, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))

export default class Box extends React.Component {
  constructor() {
    super(...arguments)
    this.dropSource = React.createRef()
  }
  render() {
    const { isDragging, connectDragSource, name, id, left, top } = this.props
    const opacity = isDragging ? 0.4 : 1
    connectDragSource(this.dropSource)
    return (
      <div id={id} ref={this.dropSource} style={Object.assign({}, style, { left, top }, { opacity })}>
      {
        this.props.children
      }
      {name}
      </div>
    )
  }
}