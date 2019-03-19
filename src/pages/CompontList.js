import react from 'react';

class shoppingList extends React.Component{

  render() {
    console.log(this.props.children)
    return (
      <div>
        <h2>我是子组件</h2>
        <p>{this.props.name}</p>
        <div>
          {this.props.children[0]}
        </div>
        <div>
          {this.props.children[1]}
        </div>
      </div>
      
    )
  }
}

export default shoppingList;