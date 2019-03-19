import React, { Component } from 'react';
import { Card } from 'antd';
import { connect } from 'dva';

const namespace = 'card';
const mapStateToProps = (state) =>{
  const cardList = state[namespace];
  return {
    cardList,
  }
}

@connect(mapStateToProps)
export default class CardPage extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        {
          // this.props.cardList.map(card => {
          //   return (
          //     <Card key={card.id}>
          //       <div>Q: {card.setup}</div>
          //       <div>
          //         <strong>A: {card.punchline}</strong>
          //       </div>
          //     </Card>
          //   );
          // })
        }
      </div>
    )
  }
}