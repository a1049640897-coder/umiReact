// 时钟组件
import React, { Component } from 'react';
export default class ChildClock extends Component {
  constructor(props) {
    super(props);
    //   初始化的时候创建组件
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }
  render() {
    return (
      <>
        <div>欢迎这是时钟组件</div>
        <div>{this.state.time}</div>
      </>
    );
  }
  componentDidMount() {
      this.timer = setInterval(() => { 
          this.tick()
      },300)
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // 创建定时器
   tick = () => { 
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }
}
