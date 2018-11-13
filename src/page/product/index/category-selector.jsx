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
        let parentCategoryChange= this.props.parentCategoryId !== nextProps.parentCategoryId
        if(!categoryIdChange && !parentCategoryChange){
                return 
        }
        if(nextProps.parentCategoryId ===0){
            this.setState({
                firstCategoryId:nextProps.categoryId,
                secondCategoryId : 0
            })
        }else{
            this.setState({
                firstCategoryId: nextProps.parentCategoryId,
                secondCategoryId: nextProps.categoryId
            },()=> {
                parentCategoryChange &&this.loadSecondCategory()
            })
        }
      
    }
    loadFirstCategory(){
        _product.getCategoryList().then(res=>{
            this.setState({
                firstCategoryId:res
            })
        },errMsg=>{
            _mm.errorTips(errMsg)
        })
    }
    loadSecondCategory(){
        _product.getCategoryList(this.state.firstCategoryId).then(res=>{
            this.setState({
                secondCategoryList:res
            })
        },errMsg =>{
            _mm.errorTips(errMsg)
        })
    }
    onFirstCategoryChange(e){
        if(this.props.readOnly){
            return ;
        }
        let newValue = e.target.value || 0
        this.setState({
            firstCategoryId:newValue,
            secondCategoryId:0,
            secondCategoryList:[]
        },()=>{
            this.loadSecondCategory()
            this.onPropsCategoryChange()
        })
    }
    onPropsCategoryChange(){
        if(this.props.readOnly){
            return
        }
        let newValue = e.target.value || 0
        this.setState({
            secondCategoryId:newValue
        },()=>{
            this.onPropsCategoryChange()
        })
    }
    render(){
        <div>
            <select className="form-control cate-select"
                    value={this.state.firstCategoryId}
                    onChange = {(e) => this.onFirstCategoryChange(e)}
                    readOnly = {this.props.readOnly}
            >
            <option value="">请选择一级分类</option>
            {
                this.state.firstCategoryList.map((category,index) => <option value ={category.id} key={index}>{category.name}</option>)
            }
            </select>
            {
                this.state.secondCategoryList.length ?
                 <select className ="form-control cate-select"
                         value={this.state.secondCategoryId}
                         onChange={e=> this.onSecondCategoryChange(e)}
                         readOnly = {this.props.readOnly}>
                         <option> 请选择二级分类</option>
                         {
                             this.state.secondCategoryList.map((categroy,index) => <option value={categroy.id} key={index}>{categroy.name}</option>)
                         }
                </select>: null
            }
        </div>
    }
}