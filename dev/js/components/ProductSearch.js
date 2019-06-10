import React from "react"

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
      <div>
	  <form>  
	    <input type="text" id="search" placeholder="search" value={filterText} onChange={this.handleFilterTextChange}/>
	    <p>
	      <input type="checkbox" checked={inStockOnly} onChange={this.handleInStockChange}/> 
	      {' '}
	       Only show products in stock
	    </p>
	  </form>  

      </div>
    
    );
  }
}
export default ProductSearch;
