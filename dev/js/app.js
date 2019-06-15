import React from "react"
import { render } from "react-dom"
import { Provider} from 'react-redux'
import axios from 'axios'
import "babel-polyfill";

import FilterableProducts from './components/FilterableProducts'
import store from './store/configureStore'

import * as actions from './actions/actions'

import styles from  '../styles/main-styles.js'

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
        <div>
            <h1 style={styles.title}>Indika's React & Redux Store</h1>
            <MainComponent / ></div>
	, document.getElementById("app"));


       