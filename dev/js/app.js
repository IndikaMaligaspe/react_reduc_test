import React from "react"
import { render } from "react-dom"
import { Provider} from 'react-redux'
import axios from 'axios'
import "babel-polyfill";

import FilterableProducts from './components/FilterableProducts'
import store from './store/configureStore'

import * as actions from './actions/actions'

class MainComponent extends React.Component{     
    constructor(props){
        super(props);
        this.handleAjaxOnLoad();
    }   

    handleAjaxOnLoad(resp){
        store.dispatch(actions.getProductlist(store.getState().propertyData))
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


       