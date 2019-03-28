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
    init: () => {
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

export default class Dragaa extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.init();
  }

  drag = () => {
    var oDiv = document.getElementById("main");
    oDiv.onmousedown = function (ev) {
      var ev = ev || event;
      var disX = ev.clientX - this.offsetLeft;
      var disY = ev.clientY - this.offsetTop;

      if (oDiv.setCapture) {
        oDiv.setCapture();
      }
      document.onmousemove = function (ev) {
        //这里为什么使用document，是因为快速拖拽的话会鼠标丢失，
        var oWrapper = document.getElementById('div1');
        var maxHeight = oWrapper.style.height - oDiv.style.height;
        var maxWidth = oWrapper.style.width - oDiv.style.width
        var ev = ev || event;
        var left = (ev.clientX - disX) > 0 ? ev.clientX - disX : 0;
        var top = (ev.clientY - disY) > 0 ? ev.clientY - disY : 0;
        oDiv.style.left = left + "px";
        oDiv.style.top = top + "px";
      }

      document.onmouseup = function (ev) {
        document.onmousemove = document.onmouseup = null;
        //为何不用oDiv.onmouseup是因为被挡住之后会无视掉遮挡的元素
        if (oDiv.releaseCapture) {

          oDiv.releaseCapture();
        }
      }
      return false;
    }
  }

  render() {

    return (
      <div style={{position: 'relative'}}>
        <div
          style={{ width: '800px', height: '500px', border: "1px solid #000"}}
          id="div1"
        >
          {/* 可拖拽区域 */}

        </div>
        <span
          style={{ padding: '5px 20px', border: '1px dashed #000', display: 'inline-block', position: 'absolute',top: '0' }}
          id="main"
          onMouseDown={this.drag}
        >
          apple
        </span>
        {/* {
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
        } */}
      </div>
    )
  }
}
