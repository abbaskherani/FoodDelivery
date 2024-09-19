import React from 'react'
import './Header.css'


/**
 * Renders the header component of the application
 * @returns {JSX.Element} A div containing the header with background image, text content, and a button
 */
const Header = () => {
  return (
    <div className='header h-[34vw] bg-[url(./header_img.png)] relative bg-contain'>
        <div className="header-contents absolute flex items-start flex-col gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn">
            <h2 className='font-medium text-white text-[max(4vw,22px)]'>Order your favorite food here</h2>
            <p className='text-white text-[1vw]'>Choose from diverse menu featuring a delectable arry of dishes crafted with the finest taste and made by the finest chef of the world</p>
            <button className='text-[#747474] font-medium py-[1vw] px-[2.3vw] bg-white rounded-full text-p' >View Menu</button>
        </div>
    </div>
  )
}

export default Header