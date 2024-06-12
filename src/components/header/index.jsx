import React from 'react'
import './header.scss'
import { NavLink, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {

    let wishlist = useSelector(state => state.wishlist.value)
    let {pathname} = useLocation()
    if (pathname.includes("/admin")) {
        return <></>
    }
    
    return (
        <>
            <header className='header '>
                <nav className='nav container'>
                    <div className="nav__left">
                        <NavLink to={"/"}>
                            <span>LOGO</span>
                        </NavLink>
                    </div>
                    <div className="nav__right">
                        <div className="nav__right-ul row">
                            <li> <NavLink to={"/"}>Home</NavLink> </li>
                            <li> <NavLink to={"/wishlist"}>
                                Wishlist
                                <sup>{wishlist.length}</sup>
                            </NavLink>
                            </li>
                            <li><NavLink to={"/addtocard"}>Cart</NavLink></li>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header