import React, { Component } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
export default class Calculator  extends Component { 
    constructor(props) { 
        super(props);
        this.state = { 
            temperature:'',
            scale:'c'
        }
    }
    handleCelsiusChange = (value) => {
       this.setState({
          temperature:value,
          scale:'c'
       })
    }
    handleFahrenheitChange = (value) => { 
        this.setState({
            temperature:value,
            scale:'f'
        }) 
    }
    //转换摄氏度
    toCelsius = (fahrenheit) => { 
        return (fahrenheit - 32) * 5 / 9;
    }
    //转换华氏摄氏度
    toFahrenheit = (celsius) => { 
        return (celsius * 9 / 5) + 32;
    }
    tryConvert = (temperature, convert) => { 
    const input  = parseFloat(temperature);
    if (Number.isNaN(input)) { 
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000; 
    return rounded.toString();
}
    render() { 
        const celsius = this.state.scale === 'c' ? this.state.temperature : this.tryConvert(this.state.temperature, this.toCelsius);
        const fahrenheit = this.state.scale === 'f' ? this.state.temperature : this.tryConvert(this.state.temperature, this.toFahrenheit);
        return ( 
        //  这是温度计算器
        <div className="Container">
            <TemperatureInput scale={'c'} onTemperatureChange={this.handleCelsiusChange} temperature={celsius}></TemperatureInput>
            <TemperatureInput scale={'f'} onTemperatureChange={this.handleFahrenheitChange} temperature={fahrenheit}></TemperatureInput>
            <BoilingVerdict celsius={celsius}></BoilingVerdict>
        </div>
        )
    }
}