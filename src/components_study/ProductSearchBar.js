import React, {Component} from 'react'

export default class ProductSearchBar extends Component{
	constructor(props){
		super(props);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleStocked = this.handleStocked.bind(this);
	}

	handleSearch(e){
		this.props.onChangeFilterText(e.target.value)
	}

	handleStocked(e){
		this.props.onChangeStocked(e.target.checked)
	}

	render(){
		return(
			<div>
				 <form>
       		<input type="text" placeholder="Search..." onChange={this.handleSearch}/>
	        <p>
	          <input type="checkbox" checked={this.props.isStocked} onChange={this.handleStocked}/>
	          {' '}
	          Only show products in stock
	        </p>
     		 </form>
			</div>
		)
	}
}