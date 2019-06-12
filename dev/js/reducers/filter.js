import { ActionTypes as types } from '../constants'

var defaultState = {
    filterText : '',
    inStockOnly: false,
}

function filter(state=defaultState ,  action){
    switch (action.type){
     case (types.CHANGE_FILTER_TEXT):
        return {
            ...state , 
            filterText: action.data.newFilterText
        }
    case(types.CHANGE_IS_INSTOCK):
        return {
            ...state ,
            inStockOnly: action.data.newInStockOnly
        }
    default :
      return state;
    }
}

export default filter;