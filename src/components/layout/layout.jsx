import React from 'react'
import { PageHeader } from 'react-bootstrap';
import Header from './header'

const Layout = React.createClass({
    render(){
        return(
            <div>
            <Header/>
                <div id="page-wrapper" className="pager-wrapper">
                    <PageHeader></PageHeader>
                </div>
            </div>
        )
    }
})
export default Layout