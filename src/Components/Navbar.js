import React from 'react'
import {NavLink} from 'react-router-dom'

import {
    Nav,
    NavItem,
    Button
} from 'reactstrap'

function Navbar(){    
    return(
        <Nav className="Navigationbar">
            <NavItem>
                <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/artistoverview">Artists</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/favourites">Favourites</NavLink>
            </NavItem>
            
        </Nav>
    )
}
export default Navbar