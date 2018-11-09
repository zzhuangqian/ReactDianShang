import React, { Component } from 'react';
import './index.scss'
export default class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      username="",
      password:''
    }
  }
  onInputChange(){
    let inputValue = e.target.value;
        inputName = e.targe.name;
        this.setState({
          [inputName] : inputValue
        })
  }
  onInputKeyUp(){
    if(e.keyCode === 13){
      this.onSubmit()
    }
  }
  onSubmit(){
    let loginInfo = {
      username:this.state.username,
      password:this.state.password
    }
    
  }
  render(){
    return (
        <div className="col-md-4 col-md-offset-4">
          <div className="panel panel-default login-panel">
            <div className="panel-heading">欢迎登录 -- Mall</div>
            <div className="panel-body">
              <form >
                <div className="form-group">
                
                <input type="text"
                  name="username"
                  onKeyUp = {e => this.onInputKeyUp(e)}
                  onChange={e => this.onInputChange(e)}
                  className="form-control"
                  placeholder="请输入用户名"/>
                </div>
                <div className="form-group">
                <input type="password"
                  name="password"
                  onKeyUp= {e => this.onInputKeyUp(e)}
                  onChange = { e => this.onInputChange(e)}
                  className="form-control"
                  placeholder="请输入密码"/>
                </div>
                <button className="btn btn-primary btn-lg btn-block">登陆</button>
              </form>


            </div>
          </div>
        </div> 
    )
  }
}