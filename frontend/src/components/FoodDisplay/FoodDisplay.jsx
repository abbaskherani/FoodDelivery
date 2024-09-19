import React, { useContext } from "react";
// import './FoodDisplay.css';
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
/**
 * Renders a display of food items filtered by category
 * @param {string} category - The category to filter food items by
 * @returns {JSX.Element} A div containing a title and a grid of FoodItem components
 */
const FoodDisplay = ({ category }) => {
  /**
   * Renders a list of food items based on the selected category
   * @param {Array} food_list - An array of food items to be displayed
   * @param {string} category - The currently selected category filter
   * @returns {JSX.Element[]} An array of FoodItem components that match the category
   */
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
