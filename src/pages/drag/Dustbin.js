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
  position: 'relative',
  color: "#000"
}
// DropTarget 用于包装接收拖拽元素的组件，使组件能够放置（dropped on it）
const targetSpec = {
  drop: (props, monitor, component) => {
    if (!component) {
      return
    }
    const targetName = component.props.name;
    const targetPage = component.props.page; // 第几页
    const oMain = document.getElementById(targetName);
    const item = monitor.getItem()
    const left = monitor.getSourceClientOffset().x-oMain.offsetLeft;
    const top = monitor.getSourceClientOffset().y-oMain.offsetTop;
    // const left = monitor.getSourceClientOffset().x;
    // const top = monitor.getSourceClientOffset().y;
    if(monitor.getInitialClientOffset().x < 400){
      var creatNew = true
      component.moveBox(item.name,item.id, left, top, creatNew, targetPage)
    }else{
      var creatNew = false
      component.moveBox(item.name,item.id, left, top, creatNew, targetPage)
    }
  },
  hover(props, monitor, component) {
  },
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
    this.state = {
      boxes: [],
    }
  }

  moveBox(name, id, left, top, creatNew, targetPage) {
    const { boxes } = this.state;
    // 需要创建新的 box
    if(creatNew){
      boxes.push({
        name,
        id: Math.random(),
        left,
        top,
        targetPage,
      })
    }else{
      boxes.map((item,index) =>{
        if(item.id === id) {
          boxes[index].left = left;
          boxes[index].top = top;
          boxes[index].targetPage = targetPage;
        }
      })
      this.setState({
        boxes,
      })
    }
  }

  render() {
    const { canDrop, isOver, connectDropTarget,name, page } = this.props
    const { boxes } = this.state;
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
        id={name}
        page={page}
        ref={this.dropTarget}
        style={Object.assign({}, style, { backgroundColor })}
      >
        {/* <svg width="100%" height="100%" version="1.1"
          xmlns="http://www.w3.org/2000/svg">
          <g fill="dodgerblue" transform="matrix(1,0,0,1, 65.1846, 2)">
            <rect x="10" y="10" width="40" height="40" ry="10" />
          </g>
        </svg> */}
        {
          boxes.length >0 ? (
            boxes.map( (item,index) =>{
              return (<Box key={index} name={item.name} id={item.id} left={item.left} top={item.top} />)
            })
          ) : (
            <span></span>
          )          
        }
        {isActive ? 'Release to drop' : 'Drag a box here'}
      </div>
    )
  }
}