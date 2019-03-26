import react from "react";
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';
const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}
// DragSource 用于包装你需要拖动的组件，使组件能够被拖拽（make it draggable）
const sourceSpec = {
  beginDrag(props) {
    return {
      name: props.name,
    }
  },
  endDrag(props, monitor) {
    const item = monitor.getItem()
    const dropResult = monitor.getDropResult()
    if (dropResult) {
      alert(`You dropped ${item.name} into ${dropResult.name}!`)
    }
  },
  canDrag(props, monitor) {
    // ..
  },
  isDragging(props, monitor) {
    // ..
  }
}
@DragSource(ItemTypes.BOX, sourceSpec, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
export default class Box extends React.Component {
  constructor() {
    super(...arguments)
    this.dragSource = React.createRef()
  }
  render() {
    const { name, isDragging, connectDragSource } = this.props
    const opacity = isDragging ? 0.4 : 1
    connectDragSource(this.dragSource)
    return (
      <div ref={this.dragSource} style={Object.assign({}, style, { opacity })}>
        {name}
      </div>
    )
  }
}