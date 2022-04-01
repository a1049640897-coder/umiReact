import React,{ Component } from "react";

export default class ChildCp extends Component { 
    constructor(props){
        super(props)
        const { name } = props
        this.state = { 
            title:name,
            age:18
        }
    }
    render(){ 
        return (
            <div> {this.state.age} </div>
         )
    }
}