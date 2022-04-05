import React, {Component } from "react";
export default class BoilingVerdict extends Component { 
    constructor(props) { 
        super(props);
    }
    render() { 
        if (this.props.celsius >= 100) { 
            return <p>水超过100度开了</p>;
        }
        return <p>水没有超过100度没开</p>;
    } 
}