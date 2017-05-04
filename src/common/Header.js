import React from 'react'
import { Link, IndexLink } from 'react-router'

const Header = () => {
    return(
            <nav>
                <IndexLink to = "/" activeClassName = "active" activeStyle = {{fontWeight: 'bold'}}>HOME</IndexLink> 
                {" | "}
                <Link to = "/about" activeClassName = "active" activeStyle = {{fontWeight: 'bold'}}>ABOUT</Link>
                 {" | "}
                <Link to = "/courses" activeClassName = "active" activeStyle = {{fontWeight: 'bold'}}>COURSES</Link>
            </nav>
    )
}

export default Header