import React from '../../node_modules/@types/react'
import {Link, NavLink,withRouter} from '../../node_modules/react-router-dom'

const Navbar =(props)=>{
    // redirect method to change contact page to about page to about page after 2 seconds
    // setTimeout(()=>{
    //     props.history.push('/about')
    // },2000);
    
    return(
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <a className="brand-logo">Poke'Time</a>
                <ul className="right">
                    <li><Link to ="/">Home</Link></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
export default withRouter(Navbar)