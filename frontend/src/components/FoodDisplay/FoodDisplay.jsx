import React, { useContext } from "react";
// import './FoodDisplay.css';
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display mt-8" id="food-display">
      <h2 className="text-[2vw] font-medium">Top dishes near you</h2>
      <div className="food-display-list grid grid-cols-auto-fill mt-8 gap-8 gap-y-12">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
