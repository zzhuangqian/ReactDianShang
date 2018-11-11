import React, { Component } from 'react';
import MUtil from 'util/mm.jsx'
import User from 'service/user-service.jsx'

const _mm = new MUtil()
const _user = new User()
export default  class NavTop extends Component{
  constructor(props){
    super(props)
    this.state = {username:_mm.getStorage('userInfo').username || ''}
  }
  onLogout(){
      _user.logout().then(res=> {
        _mm.removeStorage("userInfo");
        this.props.history.push('/login')
      },(errMsg)=> {
        _mm.errorTip(errMsg)
      })
  }
  render(){
    return (
      <div className="navbar navbar-default top-navbar" >
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" >
            <span className="sr-only">Toggle navigation</span>          
          </button>
          <a className="navbar-brand" href="index.html"><b>In</b>sight</a>
        </div>

        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown">
            <a className="dropdown-toggle" href="javascript:;">
              <i className="fa fa-envelope fa-fw"></i> 
              {
                this.state.username ? < span>欢迎{this.state.username}</span> : <span>欢迎光临</span>
              }            
            </a>
            <ul className="dropdown-menu dropdown-user">
            <li>
              <a onClick={()=> this.onLogout()}>
                  <i className="fa fa-sign-out fa-fw"></i>
                  <span>退出登录</span>
              </a>
            </li>
            
            </ul>

           </li>    
         </ul>
      </div>
     
    )
  }
}