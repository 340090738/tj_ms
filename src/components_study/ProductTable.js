import React, {Component} from 'react'
import ProductTableRow from './ProductTableRow'

export default class ProductTable extends Component{
	constructor(props){
		super(props);
	}

	render(){
		let datas = [];
		let filterText = this.props.filterText;
		let isStocked = this.props.isStocked;
		this.props.data.map((v, i) => {
			if(v.name.indexOf(filterText) > -1 || v.price.indexOf(filterText) > -1){
				datas.push(v)
			}
		});		
		return(
			<div>
				<table>
					<thead>
						<tr>
							<th>Name</th><th>Price</th>
						</tr>
					</thead>
					<tbody>
					{
						datas.map(function(v, i){
							return(
								<ProductTableRow  stockedStatus={isStocked} rowData={v} key={i}/>
							)
						})
					}	
					</tbody>
				</table>
			</div>
		)
	}
}