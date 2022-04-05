import React, { Component } from 'react'

export default class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
         name: '',
         frut:'水果'
         }

  }
  handleSubmit (e) {    
      e.preventDefault() 
    console.log('submit', this.state.name);
     }

    handleChange (e) {
    this.setState({ name: e.target.value })
     console.log('获取到的参数',e.target.value);
    }
    handleSelectChange = (e) => {
      console.log('select', e.target.value);
      this.setState({
        frut: e.target.value
      })
    }

  render () {
    return (
      <div>
        <form onSubmit={(e) =>{ this.handleSubmit(e) } }>
          <label>
            名字:
            <input type='text' name='name' value={ this.state.name} onChange={(e)=>{ this.handleChange(e) }} />
          </label>
          <input type='submit' value='提交' />
        </form>

         {/* 这是select组件 */}
         <select name="" id="" value={this.state.frut} onChange={ this.handleSelectChange }>
             <option value="水果" selected>水果</option>
             <option value="香蕉">香蕉</option>
             <option value="橘子">橘子</option>
             <option value="想法">想法</option>
         </select>

         <div> 这是子组件的值: { this.props.name } </div>
         
   
      </div>
    )
  }
}
