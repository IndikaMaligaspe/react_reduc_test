import React from 'react'


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
         <div>
             <table>
                 <tbody>
                    <tr>
                        <td>Goods</td>
                        <td><input type="radio" name="items" value='goods' 
                                checked={this.props.productType==='goods'} 
                                onChange={this.handleProductType}></input></td>
                        <td>Pets</td>
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