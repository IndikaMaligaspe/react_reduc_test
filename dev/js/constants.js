import keyMirror from 'keymirror'

export var ActionTypes = keyMirror({
    RESPONSE_LOAD_DATA:null,
    CHANGE_FILTER_TEXT:null,
    CHANGE_IS_INSTOCK:null,
    CHANGE_PRODUCT_TYPE:null

})

console.log('ActionTypes',ActionTypes);