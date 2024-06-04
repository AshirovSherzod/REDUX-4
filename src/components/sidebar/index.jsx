import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import arrow from '../../assets/arrow-left-solid.svg'
import './sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar__title">
        <Link to={"/"}>Dashboard</Link>
      </div>
      <div className="sidebar__links">  
        <NavLink to={"createproducts"}>Create products</NavLink>
        <NavLink to={"manageproducts"}>Mangae products</NavLink>
      </div>
    </div >
  )
}

export default Sidebar