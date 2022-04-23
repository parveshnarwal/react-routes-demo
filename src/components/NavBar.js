import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'

const NavBar = () => {

    const authContext = useAuth()
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/products'>Products</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            { !authContext.user ? (<NavLink to='/login' >Log In</NavLink>) : ''  }
        </nav>
    )
}

export default NavBar