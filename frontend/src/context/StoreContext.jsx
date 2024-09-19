import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

/**
 * Provides a context for managing the store's state, including cart operations.
 * @param {Object} props - The component props, including children to be wrapped by the provider.
 * @returns {JSX.Element} A StoreContext.Provider component wrapping the children with the store's context.
 */
const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  /**
   * Adds an item to the shopping cart or increments its quantity if already present
   * @param {string|number} itemId - The unique identifier of the item to be added to the cart
   * @returns {void} This function doesn't return a value, it updates the cart state
   */
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      /**
       * Updates the cart items by adding a new item or setting its quantity to 1
       * @param {function} setCartItems - React state setter function for cart items
       * @param {string|number} itemId - The unique identifier of the item to be added or updated
       * @returns {void} This function doesn't return a value, it updates the state
       */
      /**
       * Removes one unit of an item from the cart
       * @param {string|number} itemId - The unique identifier of the item to be removed
       * @returns {void} This function doesn't return a value, it updates the cart state
       */
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      /**
       * Updates the quantity of a specific item in the cart by incrementing it by 1
       * @param {function} setCartItems - React state setter function for updating cart items
       * @param {string|number} itemId - The unique identifier of the item to be updated
       * @returns {void} This function doesn't return a value, it updates the state
       /**
        * Decrements the quantity of a specific item in the cart by 1
        * @param {function} setCartItems - React state setter function for updating cart items
        * @param {string|number} itemId - The unique identifier of the item to be decremented
        * @returns {void} This function doesn't return a value, it updates the state
        */
       */
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  /**
   * A React hook that logs the cartItems to the console whenever it changes
   * @param {Array} cartItems - An array containing the items in the shopping cart
   * @returns {void} This effect does not return anything
   */
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
