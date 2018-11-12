import React, { Component } from 'react'
import Mutil from 'util/mm.jsx'
import Product from 'service/product-service.jsx'
const _mm  = new Mutil()
const _product = new Product()

export default class CategorySelector extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstCategoryList:[],
            firstCategoryId:0,
            secondCategoryList: [],
            secondCategoryId:0
        }
    }
    componentDidMount(){
        this.loadFirstCategory()
    }
    componentWillReceiveProps(nextProps){
        let categoryIdChange= this.props.categoryId !== nextProps.categoryId,
        let parentCategoryId = this.props.parentCategoryId !== nextProps.parentCategoryId
      
    }
}