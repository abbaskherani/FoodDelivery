import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'
/**
 * Footer component that renders the website's footer section
 * @returns {JSX.Element} A div containing the footer content including logo, social icons, company links, contact information, and copyright text
 */
const Footer = () => {
  return (
    <div className='footer text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 py-5 px-[8vw] pt-[80px] mt-[100px]' id='footer'>
        <div className="footer-content w-full grid xl:grid-cols-footer gap-20">
            <div className='footer-content-left'>
                <img src={assets.logo} alt="" />
                <p>Food is the industry standard name for eating and enjoying the food and Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi quaerat ducimus reprehenderit itaque quos quis, incidunt deleniti, accusantium perferendis voluptatem aperiam pariatur animi quasi? Neque omnis perferendis quaerat porro totam.</p>
                <div className="footer-social-icon flex justify-between">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91 9930-526-383</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr className='w-full h-0.5 my-5 bg-gray-100'/>
        <p className='footer-copyright-text'>CopyRight @Tomato 2024</p>
    </div>
  )
}

export default Footer