import React, {Component} from 'react'
import ProductSearchBar from './ProductSearchBar'
import ProductTable from './ProductTable'

export default class ProductFilterTable extends Component{

	constructor(props){
		super(props);
		this.state = {
			filterText: '',
			isStocked: false
		}
		this.handFilterText = this.handFilterText.bind(this);
		this.handleStocked = this.handleStocked.bind(this);
	}

	//外层父组件控制状态，然后传给子组件
	handFilterText(filterText){
		this.setState({
			filterText: filterText
		})
	}

	handleStocked(isStocked){
		this.setState({
			isStocked: isStocked
		})
	}
	
	render(){
		return(
			<div style={{width: '40%', 'fontSize': '20px'}}>
				<ProductSearchBar 
					filterText={this.state.filterText} 
					isStocked={this.state.isStocked} 
					onChangeFilterText={this.handFilterText}
					onChangeStocked={this.handleStocked} />
			  <ProductTable data={this.props.data} 
			  	filterText={this.state.filterText} 
			  	isStocked={this.state.isStocked} />
			</div>
		)
	}
}