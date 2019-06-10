import React from "react"
import { render } from "react-dom"
import { Provider} from 'react-redux'
import axios from 'axios'

import FilterableProducts from './components/FilterableProducts'
import store from './store/configureStore'

class MainComponent extends React.Component{     
    constructor(props){
        super(props);
        this.handleAjaxOnLoad();
    }   

    handleAjaxOnLoad(resp){
      this._makeLoadPropsAjaxCall();
   }

    _makeLoadPropsAjaxCall(){
       axios.get('/api/productlist')
       .then(resp=> 
           store.dispatch({type:"RESPONSE_LOAD_DATA", data:{ newPropertyData:resp.data }}) ,
       )
   }

    render() {
           return ( <Provider store={store}><div>	
              <FilterableProducts/>
             </div>	 </Provider>);
    }
}

render (
        <div><MainComponent / ></div>
	, document.getElementById("app"));


       