import React from "react"

import styles from '../../styles/ProductGrid-styles.js'

class ProductGrid extends React.Component {
   render(){
    
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    
    const row_container =  {
      borderWidth : 1,
      borderStyle : 'solid',
      borderColor : '#d6d7da' 
    };
    
     const rows = [];
     let lastCategory = null;
     
     
     this.props.products.forEach((product) => {
       if(product.name.indexOf(filterText) === -1){
         return;
       } 
       
       
       if(!product.stocked && inStockOnly){
         return;
       }

       if(product.category !== lastCategory){
        rows.push(
            <ProductGridCategory 
              category={product.category}
              key={product.category}
            />
        );
      }  
      rows.push(
        <ProductGridRow 
          product={product}
          key={product.name}
        />
      );
      lastCategory = product.category;
     });
    
     return (
      <div style={styles.mainDiv}>	     
        <table style={styles.mainTable}>
          <ProductGridHeader />
          <tbody>  
            {rows}
          </tbody>
        </table>
      </div>	     
     );
   }
}

class ProductGridHeader extends React.Component{
  render(){
    return(
        <thead>
          <tr>
             <td style={styles.tdHeading}>&nbsp;Name</td>
             <td style={styles.tdHeading}>&nbsp;Price</td>
          </tr>
        </thead>

    );
  }
}

class ProductGridCategory extends React.Component{
  render(){
    const category = this.props.category;
    return(
      <tr>
        <td style={{...styles.td , ...styles.category}} colSpan="2"> &nbsp;{category} </td>
        <td ></td>
      </tr>  
    );
  }
}

class ProductGridRow extends React.Component {
  render() {
     const product = this.props.product;
     return(
      <tr>
        <td style={styles.td}>&nbsp;&nbsp;{product.name}</td>
        <td style={styles.td}>&nbsp;&nbsp;{product.price}</td>
      </tr>
     );
  }

}

export default ProductGrid;


