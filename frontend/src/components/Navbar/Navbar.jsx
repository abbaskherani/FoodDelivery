import React, { useState } from 'react'
import { assets } from '../../assets/assets';
import './Navbar.css'
import {Link } from 'react-router-dom';

const Navbar = ({showLogin}) => {
    const [menu, setMenu] = useState("home");
  return (
    <div className='navbar xl:px-20 py-2 flex justify-between items-center'>
        <img src={assets.logo} alt="" className="logo w-40" />
        <ul className="navbar-menu flex gap-5 text-navbar text-lg">
            <Link onClick={()=> setMenu('home')} className={menu=== "home" ? "pb-1 border-b-2 border-b-black" : ""}>home</Link>
            <a href='#explore-menu' onClick={()=> setMenu('menu')} className={menu=== "menu" ? "pb-1 border-b-2 border-b-black" : ""}>menu</a>
            <a href='#app-download' onClick={()=> setMenu('mobile-app')} className={menu=== "mobile-app" ? "pb-1 border-b-2 border-b-black" : ""}>mobile-app</a>
            <a href='#footer' onClick={()=> setMenu('contact-us')} className={menu=== "contact-us" ? "pb-1 border-b-2 border-b-black" : ""}>contact us</a>
        </ul>
        <div className="navbar-right flex items-center gap-6">
            <Link to={'/cart'}><img src={assets.search_icon} alt="" /></Link>
            <div className='navbar-search-icon relative'>
                <img src={assets.basket_icon} alt="" />
                <div className="dot absolute min-h-2 min-w-2 bg-red-400 rounded-full -top-2 -right-2"></div>
            </div>
            <button onClick={()=>showLogin(true)} className='xl:text-sm  font-medium  border rounded-full border-red-600 text-navbar xl:py-2.5 xl:px-4 transition duration-300 hover:bg-[#fff4f2] '>Sign In</button>
            
        </div>
    </div>
  )
}

export default Navbar