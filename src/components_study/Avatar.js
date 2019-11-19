import React,{Component} from 'react'
import UserInfo from './UserInfo'

export default class Avatar extends Component{
	render(){
		return(
			<img className="Avatar" src={this.props.user.avatarUrl} alt={this.props.user.name} />
		)
	}
}