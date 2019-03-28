import React from 'react'
import { Layout } from 'antd';
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Dustbin from './Dustbin'
import Box from './Box'
import styles from '../index.less'
const rowStyle = { overflow: 'hidden', clear: 'both' }

const {
  Header, Footer, Sider, Content,
} = Layout;

@DragDropContext(HTML5Backend)
export default class Container extends React.Component {
  render() {
    return (
      <div>
        <div style={rowStyle} className={styles.Dustbin} >
          <Dustbin />
        </div>
        <div className={styles.Box} style={rowStyle}>
          <Box name="Glass" id="Glass" left="0" top="0px" />
          <Box name="Banana" id="Banana" left="0px" top="80px"/>
          <Box name="Paper" id="Paper" left='0px' top="160px"/>
        </div>
      </div>
    )
  }
}