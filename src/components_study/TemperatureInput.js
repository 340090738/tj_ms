import React, {Component} from 'react'
const scaleNames = {
	'c': '摄氏温度',
	'f': '华氏温度'
}

export default class TemperatureInput extends Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		this.props.onTemperatureChange(e.target.value);
	}

	render(){
		return(
			<fieldset>
        <legend>输入温度（{scaleNames[this.props.scale]}）:</legend>
        <input value={this.props.temperature} onChange={this.handleChange} />
      </fieldset>
		)
	}
}