import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Mutil from 'util/mm.jsx'
import Order from 'service/order-service.jsx'
import PageTitle from 'component/page-title/index.jsx'
import ListSearch from './index-list-search.jsx'
import TableList from 'util/table-list/index.jsx'
import Pagination from 'util/pagination/index.jsx'
import PageTitle from './../../component/page-title/index';
const _mm = new Mutil()
const _order = new Order()

export default class OrderList extends Component{
    constructor(porps){
        super(props)
        this.state = {
            list:[],
            pageNum :1,
            listType : 'list'
        }
    }
    componentDidMount(){
        this.loadOrderList()
    }
    loadOrderList(){
        let listParam = {}
        listParam.listType = this.state.listType 
        listParam.pageNum = this.state.pageNum
        if(this.state.listType === 'search'){
            listParam.orderNo = this.state.orderNumber
        }
        _order.getOrderList(listParam).then(res=>{
            this.setState(res)
        },errMsg=>{
            this.setState({
                list:[]
            })
            _mm.errorTips(errMsg)
        })
    }
    onSearch(orderNumber){
        let listType = orderNumber === ""?'list': 'search'
        this.setState({
            listType : listType,
            pageNum: 1,
            orderNumber: orderNumber
        },() => {
            this.loadOrderList()
        })
    }
    onPageNumChange(pageNum){
        this.setState({
            pageNum: pageNum
        },()=>{
            this.loadOrderList()
        })
    }
    render(){
        let tableHeads = ['订单号','收件人','订单状态','订单总价','创建时间','操作']
        return (
                <div>
                    <PageTitle title = '订单列表'></PageTitle>
                <ListSearch onSearch={(orderNumber) => { this.onSearch(orderNumber) }}>  </ListSearch>
                        <TableList tableHeads={tableHeads}>
                            {
                                this.state.list.map((order,index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <Link to={`/order/detail/${order.orderNo}`}>{order.orderNo}</Link>
                                            </td>
                                            <td>{order.receiverName}</td>
                                            <td>{order.statusDesc}</td>
                                            <td>{order.payment}</td>
                                            <td>{order.createTime}</td>
                                            <td>
                                                <Link to={`/order/detail/${order.orderNo}`}>详情</Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </TableList>
                  <Pagination current={this.state.pageNum}
                                total={this.state.total}
                                onChange={(pageNum) => this.onPageNumChange(pageNum)}
                  ></Pagination>
                </div>
        )
    }
}