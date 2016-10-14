import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = React.createClass({

    render(){

        return(

            <div>
                <Header/>
                <div id="main" role="main">
                </div>
                <Footer/>            
            </div>

        )

    }

})

export default Layout