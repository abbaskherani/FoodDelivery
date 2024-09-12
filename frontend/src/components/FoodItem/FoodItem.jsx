import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

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
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="food-item-counter absolute bottom-4 right-4 flex items-center gap-3 p-2 rounded-full bg-white">
            <img
              className="w-8"
              onClick={() => removeFromCart(id)}
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
