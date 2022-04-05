import React, { Component } from "react";

const scaleNames = {
    c: '摄氏度',
    f: '华氏度'
  };
export default class BoilingVerdict extends Component {
     constructor(props) { 
         super(props);
     }
     handleChange = (e) => { 
      console.log('输入的值',e.target.value)   
      this.props.onTemperatureChange(e.target.value);
     }
     render() {
         const temperature = this.props.temperature
         return (
             <div>
                 {/*  提取的公共input组件 */}
                 <h1>现在输入的是 {scaleNames[this.props.scale]}</h1>
                 <input type="text" onChange={ this.handleChange } value={temperature} />
             </div>
         )
      }     
 }