import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva';
import styles from './index.less';

const namespace = 'card';

const mapStateToProps = (state) => {
  const cardList = state[namespace];
  return {
    cardList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    init: () =>{
      dispatch({
        type: `${namespace}/init`,
        // payload: newCard
      })
    },
    onClickAddCard: (newCard) => {
      dispatch({
        type: `${namespace}/addNewCard`,
        payload: newCard
      })
    }
  }
}
@connect(mapStateToProps, mapDispatchToProps)

export default class CardPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.init();
  }
  render() {
    return (
      <div>
        <Button
          type="primary"
          className={styles.card}
          onClick={() => {
            this.props.onClickAddCard({
              setup: 'What happens to a frog\'s car when it breaks down?',
              punchline: 'It gets toad away',
            })
          }}
        >
          添加
        </Button>
        {
          this.props.cardList.data.map(card => {
            return (
              <Card key={card.id}>
                <div>Q: {card.setup}</div>
                <div>
                  <strong>A: {card.punchline}</strong>
                </div>
              </Card>
            );
          })
        }
      </div>
    )
  }
}
