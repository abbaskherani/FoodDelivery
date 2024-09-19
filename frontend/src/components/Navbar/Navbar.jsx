import React, { useState } from 'react'
import { assets } from '../../assets/assets';
import './Navbar.css'
import {Link } from 'react-router-dom';

/**
 * Renders a navigation bar component with menu items and user actions
 * @param {Function} showLogin - Function to toggle the login modal visibility
 * @returns {JSX.Element} A navigation bar component with logo, menu items, search, cart, and sign-in button
 */
const Navbar = ({showLogin}) => {
    ```
    /**
     * Renders a navigation link for the home page
     * @param {function} onClick - Function to set the menu state to 'home'
     * @param {string} className - CSS classes for styling the link, including conditional classes based on the current menu state
     * @returns {JSX.Element} A Link component for the home page navigation
     */
    ```
    const [menu, setMenu] = useState("home");
  return (
    /**
     * Renders a navigation link for the mobile app download section
     * @param {function} setMenu - Function to update the selected menu state
     * @param {string} menu - Current selected menu state
     * @returns {JSX.Element} An anchor element with conditional styling based on the selected menu
     */
    <div className='navbar xl:px-20 py-2 flex justify-between items-center'>
        <img src={assets.logo} alt="" className="logo w-40" />
        <ul className="navbar-menu flex gap-5 text-navbar text-lg">
            <Link onClick={()=> setMenu('home')} className={menu=== "home" ? "pb-1 border-b-2 border-b-black" : ""}>home</Link>
            /**
             * Renders a navigation link for the menu section
             * @param {function} setMenu - Function to update the current menu state
             * @param {string} menu - Current menu state
             * @returns {JSX.Element} A styled anchor element for menu navigation
             */
            <a href='#explore-menu' onClick={()=> setMenu('menu')} className={menu=== "menu" ? "pb-1 border-b-2 border-b-black" : ""}>menu</a>
            <a href='#app-download' onClick={()=> setMenu('mobile-app')} className={menu=== "mobile-app" ? "pb-1 border-b-2 border-b-black" : ""}>mobile-app</a>
            /**
             * Renders a clickable link to the contact us section
             * @param {Function} setMenu - Function to update the current menu selection
             * @param {string} menu - Current menu selection state
             * @returns {JSX.Element} An anchor element with conditional styling
             */
            <a href='#footer' onClick={()=> setMenu('contact-us')} className={menu=== "contact-us" ? "pb-1 border-b-2 border-b-black" : ""}>contact us</a>
        </ul>
        /**
         * Renders a Sign In button component
         * @param {function} onClick - Callback function to show login modal
         * @param {string} className - CSS classes for styling the button
         * @returns {JSX.Element} A button element for signing in
         */
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