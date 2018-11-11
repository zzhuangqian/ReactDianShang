import React, { Component } from 'react'
import {Route,Switch,Redirect } from 'react-router-dom'

import ProductList from 'page/product/index/index.jsx'



export default class ProductRouter extends Component{
    render(){
        return (
           <Switch>
               <Route path="/product/index" component={ProductList}></Route>
              <Redirect exact from="/product" to="/product/index"></Redirect>
           </Switch>    
        )
    }
}