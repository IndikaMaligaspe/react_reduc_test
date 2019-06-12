import { combineReducers } from 'redux'

import products from './products'
import filter from './filter'

export default combineReducers({
    product: products ,
    filter: filter
})