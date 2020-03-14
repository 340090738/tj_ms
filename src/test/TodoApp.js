import React,{Component} from 'react'
import TodoList from './TodoList'

export default class TodoApp extends Component {
	  constructor(props) {
	    super(props);
	    this.state = { items: [], text: '' };
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	  }

	  render() {
	    return (
	      <div>
	        <h3>TODO</h3>
	        <TodoList items={this.state.items} />
	        <form onSubmit={this.handleSubmit}>
	          <label htmlFor="new-todo">
	            What needs to be done?
	          </label>
	          <input
	            id="new-todo"
	            onChange={this.handleChange}
	            value={this.state.text}
	          />
	          <button>
	            Add #{this.state.items.length + 1}
	          </button>
	        </form>
	      </div>
	    );
	  }

	  handleChange(e) {
	    this.setState({ text: e.target.value });
	  }

	//   handleCommentChange = (event) =>{
	// 	console.log("value:"+event.target.value)
	// 	this.setState({
	// 		commentContent: event.target.value
	// 	})
	//   }
	  handleSubmit(e) {
	    e.preventDefault();
	    if (!this.state.text.length) {
	      return;
	    }
	    const newItem = {
	      text: this.state.text,
	      id: Date.now()
	    };
	    this.setState({
	      items: this.state.items.concat(newItem),
	      text: ''
	    });
	  }
	}