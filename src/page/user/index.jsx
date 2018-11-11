import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import PageTitle from 'component/page-title/index.jsx'
import Pagination from 'util/pagination/index.jsx'
import User from 'service/user-service.jsx'
import MUtil from 'util/mm.jsx'

const _mm = new MUtil()
const _user = new User()

export default class UserList extends Component{
    constructor(props){
        super(props)
        this.state={
            pageNum:1,
            list:[]
        }
    }
    componentWillMount(){
        this.loadUserList()
    }

    loadUserList(){
    _user.getUserList(this.state.pageNum).then(res=>{
        this.setState(res)
    },errMsg=> {
        this.setState({
            list:[],
            pageNum:1
        })
        _mm.errorTips(errMsg)
    })
    }
    onPageNumChange(pageNum){
        this.setState({
            pageNum
        },()=> {
            this.loadUserList()
        })
    }
    render(){
        return <div>
            <PageTitle title="用户列表" />
            <table className="table table-striped table-border">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>用户名</th>
                  <th>邮箱</th>
                  <th>电话</th>
                  <th>注册时间</th>
                </tr>
              </thead>
              <tbody>
                {
                    this.state.list.map((user,index) =>{
                        return (
                            <tr key={index}>
                                <td >{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.createTime}</td>
                            </tr>
                        )
                    })
                }
              </tbody>
            </table>
            <Pagination current={11} total={200} onChange= {(pageNumber) => this.onPageNumChange(pageNumber)}></Pagination>
          </div>;
    }
}