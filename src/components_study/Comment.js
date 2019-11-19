import React,{Component} from 'react'
import UserInfo from './UserInfo'

export default class Comment extends Component{
	constructor(props){
		super(props);
		this.state = {
			author: this.props.author,
			text: this.props.text,
			date: this.props.date,
			index: this.props.index
		}
	}



	render(){
	
		return(
			<div style={{margin:'20px',border: 'solid 1px'}}>
				<UserInfo user={this.state.author}/>
				<div className="Comment-text">
	        {this.state.text}
	      </div>
	      <div className="Comment-date">
	        {this.state.date}
	      </div>
	     
			</div>
		)
	}
}