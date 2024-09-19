import React from 'react'
import './ExploreMenu.css';

import { menu_list } from '../../assets/assets';

    /**
     * Renders an explore menu component with category selection functionality
     * @param {string} category - The currently selected menu category
     * @param {function} setCategory - Function to update the selected category
     * @returns {JSX.Element} A div containing the explore menu UI with category selection
     */
    const ExploreMenu = ({category,setCategory}) => {

/**
 * Renders a list of menu items with clickable images and names
 * @param {Array} menu_list - An array of menu item objects containing menu_name and menu_image properties
 * @param {string} category - The currently selected category
 * @param {function} setCategory - Function to update the selected category
 * @returns {Array} An array of JSX elements representing menu items
 */
// console.log(category,item.menu_name);
  return (
    <div className='explore-menu flex flex-col gap-5' id='explore-menu'>
        <h1 className='text-[#262626] font-medium text-4xl'>Explore our menu</h1>
        <p className='explore-menu-text max-w-[60%] text-[#808080]'>Choose from diverse menu featuring a delectable arry of dishes crafted with the finest taste and made by the finest chef of the world</p>
        <div className='explore-menu-list flex justify-between items-center gap-8 text-center overflow-x-scroll mx-0 my-5'>
            {menu_list.map((item,index)=>{
                console.log(category,item.menu_name)
                return (
                    /**
                     * Handles click event to toggle category selection
                     * @param {Function} onClick - Event handler for div click
                     * @returns {void} Updates category state based on current selection
                     */
                    <div onClick={()=> {
                        /**
                         * Updates the category state based on the selected menu item
                         * @param {function} prev - The previous state setter function for the category
                         * @returns {string} The new category value: "All" if the previous category matches the item's menu name, otherwise the item's menu name
                         */
                        setCategory(prev=> 
                        prev===item.menu_name? "All" : item.menu_name)}} 
                        key={index} className='explore-menu-list-item'>
                        <img src={item.menu_image} alt="" className={`
                        ${category === item.menu_name ? "active" : ""}`}/>
                        <p className='mt-2 cursor-pointer text-[1.4vw] text-[#747474]'>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr className='my-2 h-0.5 bg-[#e2e2e2] border-none'/>
    </div>
  )
}

export default ExploreMenu