import React, { Component } from 'react'
import './theme.css'
import ReactDOM from 'react-dom'
import TopNav from 'component/nav-top/index.jsx'
import SideNav from 'component/nav-side/index.jsx'
class Layout extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div id="wrapper">
				<TopNav/>
        <SideNav/>
        <div id="page-wrapper">
          {this.props.children}
        </div>
			</div>
		)
	}
}
export default Layout
