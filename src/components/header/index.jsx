import React from 'react'
import './header.scss'
import { NavLink, useLocation } from 'react-router-dom'

const Header = () => {

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
                                <sup>0</sup>
                            </NavLink>
                            </li>
                            <li> <NavLink to={"/admin/manageproducts"}>Admin</NavLink> </li>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header