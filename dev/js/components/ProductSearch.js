import React from "react"
import styles from '../../styles/productSearch.js'

class ProductSearch extends React.Component {
	constructor(props){
		super(props);
		this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
		this.handleInStockChange = this.handleInStockChange.bind(this);
	}

	handleFilterTextChange(e){
    	this.props.onFilterTextChange(e.target.value);
	}

	handleInStockChange(e){
		this.props.onInStockChange(e.target.checked);
	}

  render(){
	  const filterText = this.props.filterText;
	  const inStockOnly = this.props.inStockOnly;

    return (
      <div style={styles.mainDiv}>
	  <form>  
	  	<ul style={styles.ul}>
		  <li><input  type="text" id="search" placeholder="search" 
				value={filterText} onChange={this.handleFilterTextChange}/>
		  </li>
		  <li><input type="checkbox" checked={inStockOnly} 
		  	onChange={this.handleInStockChange}/> 
	      	{' '}
	       	Only show products in stock
		   </li>
		</ul>
	  </form>  

      </div>
    
    );
  }
}
export default ProductSearch;
