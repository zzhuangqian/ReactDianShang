import React, { Component } from 'react';

export default  class NavTop extends Component{
  constructor(props){
    super(props)
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
             <span>欢迎光临</span>
            </a>
            <ul className="dropdown-menu dropdown-user">
            <li>
              <a >
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