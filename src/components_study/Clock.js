import React, {Component} from 'react'

export default class Clock extends Component{

	constructor(props){
		super(props);
		this.state = {
			date: new Date(),
			interval: this.props.interval,
			name: this.props.name,
			description: this.props.description
		}
	}
	
	componentDidMount(){
		this.timerId = setInterval(
			() => this.tick(),this.state.interval
		);
	}

	componentWillUnmount(){
		clearInterval(this.timerId)
	}

	// tick = () => {
	// 	this.setState({
	// 		date: new Date()
	// 	})
	// }

  tick(){
		this.setState({
			date: new Date()
		})
	}

	render(){
		return(
			<div>
				<h1>hello, {this.state.name}!</h1>
				<h1 className='name_cls'></h1>
				<h2>当前时间{this.state.description}：{this.state.date.toLocaleTimeString()}.</h2>
			</div>
		)

	}

}