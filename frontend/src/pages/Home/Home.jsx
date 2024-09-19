import React, { useState } from 'react'
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

/**
 * Renders the Home component, which displays the main page of the application.
 * @param {void} - This component doesn't accept any parameters.
 * @returns {JSX.Element} A React component that renders the home page structure.
 */
const Home = () => {

  const [category, setCategory] = useState('All');

  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category} />
        <AppDownload />
    </div>
  )
}

export default Home