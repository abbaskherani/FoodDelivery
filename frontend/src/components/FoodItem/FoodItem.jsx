import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

/**
 * Renders a food item component with image, details, and cart functionality
 * @param {string} id - Unique identifier for the food item
 * @param {string} name - Name of the food item
 * @param {number} price - Price of the food item
 * @param {string} description - Description of the food item
 * @param {string} image - URL of the food item image
 * @returns {JSX.Element} A food item card with image, details, and add/remove from cart buttons
 */
const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="food-item w-full m-auto shadow-md duration-300">
      <div className="food-item-img-container relative">
        <img
          className="food-item-image w-full rounded-tl-2xl rounded-tr-2xl"
          src={image}
          alt=""
        />
        {!cartItems[id] ? (
          <img
            className="add w-[35px] absolute bottom-4 right-4 rounded-full cursor-pointer"
            /**
             * Adds an item to the shopping cart
             * @param {function} onClick - Event handler function to be called when the element is clicked
             * @param {number} id - The unique identifier of the item to be added to the cart
             * @returns {void} This function doesn't return a value
             */
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="food-item-counter absolute bottom-4 right-4 flex items-center gap-3 p-2 rounded-full bg-white">
            <img
              className="w-8"
              /**
               * Removes an item from the shopping cart
               * @param {number|string} id - The unique identifier of the item to be removed
               * @returns {void} This function does not return a value
               */
              onClick={() => removeFromCart(id)}
              ```
              /**
               * Adds an item to the shopping cart
               * @param {string|number} id - The unique identifier of the item to be added to the cart
               * @returns {void} This function does not return a value
               */
              ```
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info p-5">
        <div className="food-item-name-rating flex justify-between items-center mb-[10px]">
          <p className="text-[20px] font-medium">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc text-[#676767] text-[12px]">
          {description}
        </p>
        <p className="food-item-price text-tomato text-[22px] font-medium my-3">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
