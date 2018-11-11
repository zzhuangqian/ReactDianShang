import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Switch,Redirect,Route} from 'react-router-dom'
import Home from 'page/home/index.jsx'
import Layout from 'component/layout/index.jsx'
import Login from "page/login/index.jsx"
import Error from 'page/error/index.jsx'
import UserList from 'page/user/index.jsx'
import ProductRoute from 'page/product/router.jsx'
class App extends React.Component{
  render(){
    
    let LayoutRouter = <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={ProductRoute} />
          <Route path="/order" component={Home} />
          <Route path="/user/list" component={UserList} />
          <Redirect exact from="/user" to="/user/list" />
          <Route component={Error} />
        </Switch>
      </Layout>;
    return (
        <Router>
          <Switch>
              <Route path='/login' component={Login} />
              <Route path='/' render={props => LayoutRouter} />
          </Switch>
        
          
         
        </Router>
    );
  }
}
ReactDOM.render(<App></App>,document.querySelector('#app'))