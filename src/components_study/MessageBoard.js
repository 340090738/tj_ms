import React,{Component} from 'react'
// import { Button } from 'antd'
import Button from '@material-ui/core/Button'
import Comment from './Comment'
import Clock from './Clock'

Date.prototype.format = function(format) {
    var date = {
       "M+": this.getMonth() + 1,
       "d+": this.getDate(),
       "h+": this.getHours(),
       "m+": this.getMinutes(),
       "s+": this.getSeconds(),
       "q+": Math.floor((this.getMonth() + 3) / 3),
       "S+": this.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
       format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
       if (new RegExp("(" + k + ")").test(format)) {
           format = format.replace(RegExp.$1, RegExp.$1.length == 1
              ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
       }
    }
    return format;
}

export default class MessageBoard extends Component{

	constructor(props){
		super(props);
		this.state = {
			datas: [],
			commentContent: ""
		}
		this.handleCommentChange = this.handleCommentChange.bind(this);
	}

	//其实就是为了loading做的
	changeState = (newDatas) => {
		this.setState({
			datas: newDatas,
			commentContent: ""
		})
	}


	addComment = () => {
		let obj = {
			author: {name: '机器人'+parseInt(Math.random(100) * 10000), avatarUrl: 'http://placekitten.com/g/64/64'},
			// text: $('#content_txt').val(), //jquery dom 方式
			text: this.state.commentContent,
			date: new Date().format('yyyy-MM-dd h:m:s'),
			id: Date.now()
		}
		this.setState({
			loading: true
		})
		let newDatas = this.state.datas;
		newDatas.push(obj);
		let that = this;
		that.changeState(newDatas);
		// $('#content_txt').val('');  //jquery dom 方式
	}

	removeComment = (commentId) =>{
		let newDatas = this.state.datas;
		let index = -1;
		newDatas.map(function(v, i){
			if(v.id == commentId)
				index = i
		})
		newDatas.splice(index,1)
		this.setState({
			datas: newDatas
		})
	}

	//非jquery的方式处理添加comment
	handleCommentChange = (event) =>{
		console.log("value:"+event.target.value)
		this.setState({
			commentContent: event.target.value
		})
	}

	render(){
		return(
			<div style={{margin: '5px',border: 'solid 1px',width: '40%'}}>
				<Clock interval={1000} name='陈曦' description='(每秒更新)'/>
				<Clock interval={5000} name='李雷' description='(每5秒更新)'/>
				<label>
         	机器人留言内容:
          <textarea id='content_txt' value={this.state.commentContent} onChange={this.handleCommentChange} style={{width: '300px', height: '100px'}} />
        </label>
				<Button variant="contained" color="primary" onClick={()=> this.addComment()}>添加评论</Button>
				<h3>共有评论条数：{this.state.datas.length}</h3>
			{
				this.state.datas.map(item => (
						<div key={item.id}>
							<Comment  author={item.author} text={item.text} date={item.date} />
							<Button type="button" onClick={() => this.removeComment(item.id)}>删除</Button>
						</div>
				))
			}
			</div>
		)
	}
}