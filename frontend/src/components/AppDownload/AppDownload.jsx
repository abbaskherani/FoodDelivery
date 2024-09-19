import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";
/**
 * Renders an app download section with links to download the Tomato App.
 * @returns {JSX.Element} A div containing text and images for app store downloads.
 */
const AppDownload = () => {
  return <div className="app-download m-auto mt-[100px] text-[max(3vw,20px)] text-center font-medium" id="app-download">
    <p>For Better Experience Download <br /> Tomato App</p>
    <div className="app-download-platforms flex justify-center gap-[max(2vw,10px)] mt-10">
        <img className="w-[max(30vw,120px)] max-w-[180px] cursor-pointer duration-500 hover:scale-110" src={assets.play_store} alt="" />
        <img className="w-[max(30vw,120px)] max-w-[180px] cursor-pointer duration-500 hover:scale-110" src={assets.app_store} alt="" />
    </div>
  </div>;
};

export default AppDownload;

//remote jobs
//angellist
//hacker news
//techcrunch -> silicion valley blogs me new funding mili unko target kr sakte 
//turing
//toptal
//flexiple
