import React,{Component} from 'react'
import Avatar from './Avatar'

export default class UserInfo extends Component{
	render(){
		return(
			<div>
				<Avatar user={this.props.user}/>
				<div className="UserInfo-name">
          {this.props.user.name}
        </div>
			</div>
		)
	}
}