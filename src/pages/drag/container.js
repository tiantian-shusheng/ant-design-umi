import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Box from './Box';
import Dustbin from './Dustbin';

// DragDropContex 用于包装拖拽根组件，DragSource 和 DropTarget 都需要包裹在DragDropContex内
@DragDropContext(HTML5Backend)
export default class Contaier extends React.Component {
  render() {
    return (
      <div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Dustbin />
        </div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Box name="Glass" />
          <Box name="Banana" />
          <Box name="Paper" />
        </div>
      </div>
    );
  }
}