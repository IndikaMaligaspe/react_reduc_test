import React from 'react'

import styles from '../../styles/ProductTypes-styles.js'

class ProductType extends React.Component{
  constructor(props){
      super(props);
      this.handleProductType = this.handleProductType.bind(this);
      console.log('this.props.productType = ', this.props.productType);
  }

  handleProductType(e){
    this.props.onProductTypeChange(e.target.value);
  }

   render(){
       return(
         <div style={styles.mainDiv}>
             <table style={styles.mainTable}>
                 <tbody>
                    <tr>
                        <td>Goods &nbsp;&nbsp; </td>
                        <td><input type="radio" name="items" value='goods' 
                                checked={this.props.productType==='goods'} 
                                onChange={this.handleProductType}></input></td>
                        <td>  &nbsp;&nbsp; Pets  &nbsp;&nbsp;</td>
                        <td><input type="radio" name="items" value='pets' 
                                checked={this.props.productType==='pets'} 
                                onChange={this.handleProductType}></input></td>
                    </tr>
                 </tbody> 
             </table>
        </div>
       )}


}

export default ProductType