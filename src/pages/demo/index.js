
import React,{Component} from 'react';
import {Button} from 'antd'
import ChildCp from './components/chidCp';
import ChildClock from './components/chidClock';
export default class Demo extends Component {

//  组件的生命周期 constructor() static getDerivedFormProps() render() componentDidMount()

 constructor(props){ 
    super(props)
    this.state  = { counter:0 }
    // this.addBtn = this.addBtn.bind(this)
 }
  addBtn(){
      console.log('addBtn');
    this.setState((state)=>({
        counter:state.counter+1
    }))
 }

 delBtn = (counter) =>{
   this.setState((state)=>({
         counter:state.counter-1
   }))
 }
 
 // 
 render(){
     return (
         <div>
             <div className='demo'>
                 这是测试页面
                 <h1>{this.state.counter}</h1>
                <div><Button style={{marginTop:'10px'}} onClick= {()=>this.addBtn() }>+</Button></div>
                <div><Button style={{marginTop:'10px'}} onClick= { this.delBtn }>-</Button></div>
                <div>
                <ChildCp name='这是父组件的值'></ChildCp>
                </div>
                <div className='clock'>
                <ChildClock></ChildClock>
                </div>
             </div>
         </div> 
     )
 }
 componentDidMount(){
     console.log('componentDidMount');
     this.setState({counter:2})
 }

// 首次并不会被渲染
componentDidUpdate(prevProps, prevState, snapshot){
  console.log('prevProps',prevProps,'prevState',prevState,'snapshot',snapshot);
 }

 componentWillUnmount(){
     console.log('组件卸载了');
 }
}
