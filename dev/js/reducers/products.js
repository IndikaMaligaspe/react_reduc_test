import { ActionTypes as types } from '../constants'

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'}
  ];

var defaultState = {
    productType: 'goods', 
    propertyData: PRODUCTS
}

function product(state=defaultState ,  action){
    switch (action.type){
        case(types.CHANGE_PRODUCT_TYPE):
            return {
                ...state ,
                productType: action.data.newProductType
            }    
        case(types.RESPONSE_LOAD_DATA):
            return {
                ...state ,
                propertyData: action.data.newPropertyData
            }
        default :
            return state;
    }
}

export default product;