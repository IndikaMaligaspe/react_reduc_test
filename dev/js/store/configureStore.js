import { applyMiddleware ,  createStore } from 'redux'
import { createLogger } from 'redux-logger'

import thunk from 'redux-thunk';

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'}
  ];

var defaultState = {
    filterText : '',
    inStockOnly: false,
    productType: 'goods', 
    propertyData: PRODUCTS
}

function action(state=defaultState ,  action){
    switch (action.type){
     case ('CHANGE_FILTER_TEXT'):
        return {
            ...state , 
            filterText: action.data.newFilterText
        }
    case('CHANGE_IS_INSTOCK'):
        return {
            ...state ,
            inStockOnly: action.data.newInStockOnly
        }
    case('CHANGE_PRODUCT_TYPE'):
            return {
                ...state ,
                productType: action.data.newProductType
            }    
    case('RESPONSE_LOAD_DATA'):
        return {
            ...state ,
            propertyData: action.data.newPropertyData
        }
    default :
      return state;
    }
}

var logger = createLogger({
    collapsed: true
})

var store = createStore(
    action ,
    applyMiddleware(thunk ,logger)
    );

export default store;