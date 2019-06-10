import { applyMiddleware ,  createStore } from 'redux'
import { createLogger } from 'redux-logger'

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'}
  ];

var defaultState = {
    filterText : '',
    inStockOnly: false,
    productType: goods, 
    propertyData: PRODUCTS
}

function action(state=defaultState ,  action){
    if (action.type === 'CHANGE_FILTER_TEXT') {
        return {
            ...state , 
            filterText: action.data.newFilterText
        }
    }else if(action.type === 'CHANGE_IS_INSTOCK'){
        return {
            ...state ,
            inStockOnly: action.data.newInStockOnly
        }
    }else if(action.type === 'CHANGE_PRODUCT_TYPE'){
            return {
                ...state ,
                productType: action.data.newProductType
            }    
    }else if(action.type === 'RESPONSE_LOAD_DATA'){
        return {
            ...state ,
            propertyData: action.data.newPropertyData
        }
    }
    return state;
}

var logger = createLogger({
    collapsed: true
})

var store = createStore(
    action ,
    applyMiddleware(logger)
    );

export default store;