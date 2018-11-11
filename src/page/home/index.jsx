import React from 'react'
import "./index.scss"
import PageTitle from 'component/page-title/index.jsx'
import { Link } from 'react-router-dom';
import Statistic from 'service/statistic-service.jsx'
import MUtil from 'util/mm.jsx'
import User from 'service/user-service.jsx'

const _mm = new MUtil()
const _user = new User()

const _statistic = new Statistic();
class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      userCount:'-',
      productCount:'-',
      orderCount:'-'
    }
  }
  componentWillMount(){
    this.loadCount()
  }
  loadCount(){
    _statistic.getHomeCount().then(res=>{
      this.setState(res)
    },errMsg=> {
      _mm.errorTips(errMsg)
    })
  }
  render(){
    return (
        <div>
        <PageTitle title="首页3"></PageTitle>
           <div className="row">
                <div className="col-md-4">
                    <Link to="/user" className="color-box blue">
                        <p className="count">{this.state.userCount}</p>
                        <p className="desc">
                          <i className="fa fa-user-o"></i>
                            <span>用户总数</span>
                        </p>
                    </Link>
                </div>
            
                <div className="col-md-4">
                  <Link to="/user" className="color-box red">
                    <p className="count">{this.state.productCount}</p>
                    <p className="desc">
                      <i className="fa fa-user-o"></i>
                      <span>商品總數</span>
                    </p>
                  </Link>
                </div>
                <div className="col-md-4">
                  <Link to="/user" className="color-box green">
                    <p className="count">{this.state.orderCount}</p>
                    <p className="desc">
                      <i className="fa fa-user-o"></i>
                      <span>訂單总数</span>
                    </p>
                  </Link>
                </div>
           </div>          
        </div>
      )
  }
}
export default Home