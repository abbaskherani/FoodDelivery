import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

/**
 * Main App component that handles routing and conditional rendering of components
 * @param {void} - This component doesn't accept any parameters
 * @returns {JSX.Element} The rendered App component with navigation, routes, and conditional login popup
 */
const App = () => {
  const [showLogin, setshowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup showLogin={setshowLogin} /> : <></>}

      <div className="app">
        <Navbar showLogin={setshowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
