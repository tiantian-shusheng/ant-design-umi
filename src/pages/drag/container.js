import React from 'react'
import { Layout, Button } from 'antd';
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Dustbin from './Dustbin'
import Box from './Box'
import styles from '../index.less'
const rowStyle = { clear: 'both' }

const {
  Header, Footer, Sider, Content,
} = Layout;

@DragDropContext(HTML5Backend)
export default class Container extends React.Component {
  // 绑定子组件 
  onRef = (ref) => {
    this.child = ref
  }

  componentDidMount(){
  }
  render() {
    // const imgs = [
    //   {
    //     name: 'aa', // 每个容器的id，计算位置的时候要用到
    //     page: '1'
    //   }
    // ]
    return (
      <div className={styles.container}>
        <Button>发送</Button>
        <div className={styles.Box} style={rowStyle}>
          <div className={styles.BoxWrapper}>
            <Box name="Glass" id="Glass" left="0" top="0px" />
            <Box name="Banana" id="Banana" left="0px" top="80px" />
            <Box name="Paper" id="Paper" left='0px' top="160px" />
          </div>
        </div>
        <div style={rowStyle} className={styles.Dustbin} >
          <Dustbin name="aa" page="1" />
          <Dustbin name="bb" page="2" />
          <Dustbin name="cc" page="3" />
        </div>
      </div>
    )
  }
}