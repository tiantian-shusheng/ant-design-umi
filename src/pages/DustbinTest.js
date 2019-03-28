import react from "react";
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import Box from './Box';
const style = {
  height: '300px',
  width: '800px',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
}
// DropTarget 用于包装接收拖拽元素的组件，使组件能够放置（dropped on it）
const targetSpec = {
  drop: (props, monitor, component) => {
    if (!component) {
      return
    }
    const e = window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;
    // clientX与clientY是获取相对于当前屏幕的坐标，忽略了页面滚动因素，
    // 这在很多环境下很有用，但当我们需要考虑页面滚动，也就是相对于文档（body元素）的坐标时怎么办呢？只要加上滚动的位移就可以了。

    // 在chrome可以通过document.body.scrollLeft，document.body.scrollTop计算出页面滚动位移，
    // 而在IE下可以通过document.documentElement.scrollLeft，document.documentElement.scrollTop
    // console.log('鼠标x', x)
    // console.log('鼠标y', y)
    monitor.getClientOffset() // 拖拽组件当前offset
    // console.log(props)
    console.log(monitor.getSourceClientOffset())
    const x = monitor.getSourceClientOffset().x;
    const y = monitor.getSourceClientOffset().y;
    

  },
  hover(props, monitor, component) {
  },
  // canDrop(props, monitor){
  //   monitor.canDrop()
  // }
}

@DropTarget(ItemTypes.BOX, targetSpec, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))

export default class Dustbin extends React.Component {
  constructor() {
    super(...arguments)
    this.dropTarget = React.createRef()
  }

  render() {
    const { canDrop, isOver, connectDropTarget } = this.props
    const isActive = canDrop && isOver
    connectDropTarget(this.dropTarget)
    let backgroundColor = '#222'
    if (isActive) {
      backgroundColor = 'darkgreen'
    } else if (canDrop) {
      backgroundColor = 'darkkhaki'
    }
    return (
      <div
        ref={this.dropTarget}
        style={Object.assign({}, style, { backgroundColor })}
      >
       {/* <Box name="Glass" id="Glass" /> */}
        {isActive ? 'Release to drop' : 'Drag a box here'}
      </div>
    )
  }
}