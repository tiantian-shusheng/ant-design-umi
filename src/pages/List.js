import react from "react";

import CompontList from "./CompontList";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  compontDidMount(){
    // 在组件挂在后自动调用
  }

  compontWillUnmount() {
    // 在组件卸载前自动调用
  }

  componentDidUpdate() {
    // 在 ui 每次更新后调用（即组件挂载成功后，每次调用 reder 方法，都会触发此方法。）
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
    // 每当 this.props 或 this.state 有变化，在 render 执行之前就会调用此方法。该方法返回一个布尔值，表示是否继续执行render方法，
    // 如果返回 false,UI 就不会更新，默认返回true。组件挂载时，render方法的第一次执行，不会调用这个方法。
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <CompontList name="我是哈哈哈哈" >
          <div>第一行</div>
          <div>第二行</div>
        </CompontList>
        <hr></hr>
        <p onClick={() => { this.setState({ count: 1 }) }}>点击 <span>{count}</span></p>
      </div>
    )
  }
}

export default List;

//1. Class 可以通过extends关键字实现继承。
//2. constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。 一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
//3. super关键字，它在这里表示父类的构造函数，用来新建父类的this对象。 
/*子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类自己的实例对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，
  然后再对其进行加工，加上子类自己的属性和方法。如果不调用super方法，子类就得不到this对象。
*/
/*ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。
  ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this。
*/