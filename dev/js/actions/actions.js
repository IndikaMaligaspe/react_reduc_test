import axios from 'axios'
import debounce from 'lodash.debounce'

import { ActionTypes as types } from '../constants'


export function getProductlist(productType){
    return (dispatch) =>{
        handleProductType(productType , dispatch);
    }
}

function _handleProductType(productType , dispatch){
    var api = '/api/productlist';
    if(productType === 'pets'){
        api = '/api/petlist';
    }
    axios.get(api).then((resp)=>{
        dispatch({type:types.RESPONSE_LOAD_DATA, data : {newPropertyData : resp.data}});
    });
 }

 var handleProductType = debounce(_handleProductType, 300);