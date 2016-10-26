import React from 'react'
import { PageHeader } from 'react-bootstrap';
import Header from './header'

const Layout = React.createClass({    

    render(){
        console.log('layout')
        return(
            <div>
            <Header/>
                <div id="page-wrapper" className="pager-wrapper">
                    {this.props.children}
                </div>
            </div>
        )
    }
})
export default Layout