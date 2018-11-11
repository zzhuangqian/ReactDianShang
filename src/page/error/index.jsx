import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PageTitle from 'component/page-title/index.jsx'

export default class Error extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
       <PageTitle title="出错了"></PageTitle>
        <div className="row">
          <div className="col-md-12">
            <span>找不到该 路径</span>
            <Link to="/">点我返回首页</Link>
          </div>
        </div>
      </div>
    );
  }
}