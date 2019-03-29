import React from 'react'
import { Layout } from 'antd';
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
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.Box} style={rowStyle}>
          <div className={styles.BoxWrapper}>
            <Box name="Glass" id="Glass" left="0" top="0px" />
            <Box name="Banana" id="Banana" left="0px" top="80px" />
            <Box name="Paper" id="Paper" left='0px' top="160px" />
          </div>
        </div>
        <div style={rowStyle} className={styles.Dustbin} >
          <Dustbin name="aa" page="1"/>
          <Dustbin name="bb" page="2" />
          <Dustbin name="cc" page="3" />
        </div>
      </div>
    )
  }
}