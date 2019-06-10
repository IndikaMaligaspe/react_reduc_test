import React from 'react'


class ProductType extends React.Component{
   render(){
       return(
         <div>
             <table>
                 <tbody>
                    <tr>
                        <td>Goods</td>
                        <td><input type="radio" name="items" defaultChecked></input></td>
                        <td>Pets</td>
                        <td><input type="radio" name="items" ></input></td>
                    </tr>
                 </tbody> 
             </table>
        </div>
       )}


}

export default ProductType