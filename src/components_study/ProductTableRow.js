import React ,{Component} from 'react'

export default class ProductTableRow extends Component{

	render(){
		const product = this.props.rowData;
		console.log("product name:" + product.name + ",product stocked:" + product.stocked + ",check status:" + this.props.stockedStatus);
		const style = (this.props.stockedStatus && this.props.stockedStatus == product.stocked) ? {color: 'red'} : {};
		return(
			<tr style={style}>
				<td>{product.name}</td>
				<td>{product.price}</td>
			</tr>
		)
	}
}