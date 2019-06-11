import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import debounce from 'lodash.debounce'

import ProductSearch from './ProductSearch'
import ProductGrid from './ProductGrid'
import ProductType from './ProductTypes'

class FilterableProducts extends React.Component{
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
        this.handleProductType = this.handleProductType.bind(this);
    }

     handleFilterTextChange(filterText){
        this.props.dispatch({type:"CHANGE_FILTER_TEXT", data:{ newFilterText:filterText }});
    }

    handleInStockChange(inStockOnly){
        this.props.dispatch({type:"CHANGE_IS_INSTOCK" , data:{ newInStockOnly: inStockOnly }});
    }

    handleProductType(productType){
        var api = '/api/productlist';
        this.props.dispatch({type:"CHANGE_PRODUCT_TYPE", data:{ newProductType: productType }});
        if(productType === 'pets'){
            api = '/api/petlist';
        }
        axios.get(api)
       .then(resp=> 
           this.props.dispatch({type:"RESPONSE_LOAD_DATA", data:{ newPropertyData:resp.data }}) ,
       )
    }

   render(){
       return(
        <div>	
            <ProductType 
                productType = {this.props.productType}
                onProductTypeChange={this.handleProductType}
            />
	        <ProductSearch 
                filterText = {this.props.filterText}
                inStockOnly = {this.props.inStockOnly}
                onFilterTextChange={this.handleFilterTextChange}
                onInStockChange={this.handleInStockChange}
            />
            <ProductGrid 
                filterText = {this.props.filterText}
                inStockOnly = {this.props.inStockOnly}
                products={this.props.propertyData} 
            />
       </div>	 
       );
   }

}

export default connect((state , props) =>{
    return {
        filterText : state.filterText ,
        inStockOnly : state.inStockOnly ,
        productType : state.productType,
        propertyData : state.propertyData
    }
})(FilterableProducts)