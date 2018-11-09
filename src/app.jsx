import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Switch,Redirect,Route} from 'react-router-dom'
import Home from 'page/home/index.jsx'
import Layout from 'component/layout/index.jsx'
import Login from "page/login/index.jsx"
class App extends React.Component{
  render(){
    return (
        <Router>
          <Switch>
              <Route path='/login' component={Login} />
              <Route path='/' render={(props) => (
                <Layout>
                  <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/product" component={Home}></Route>
                    <Route path="/order" component={Home}></Route>
                    <Route path="/user" component={Home}></Route>
                  </Switch>
                </Layout>
              )} />
          </Switch>
        
          
         
        </Router>
    );
  }
}
ReactDOM.render(<App></App>,document.querySelector('#app'))