## FoodDelivery Frontend Documentation

This project contains the frontend code for a food delivery application. It is built using React and Vite.

###  Input

The frontend uses a store context to manage the state of the application, including:

*   **food_list:** An array of objects representing the available food items, including their IDs, names, prices, descriptions, categories, and images.
*   **cartItems:** An object containing the number of items currently in the user's cart, keyed by the item's ID.

### Output

The frontend renders a number of components, including:

*   **Navbar:**  Displays navigation links, a cart icon, and a sign-in button.
*   **Header:**  Displays a hero image and promotional text for the application.
*   **ExploreMenu:**  Allows users to filter the displayed food items by category.
*   **FoodDisplay:**  Displays a list of food items, allowing users to add items to their cart.
*   **FoodItem:**  Displays information about a single food item, including its name, price, description, and a button to add or remove items from the cart.
*   **Cart:**  Displays the items in the user's cart.
*   **PlaceOrder:**  Allows users to complete their order.
*   **Footer:**  Displays contact information, social media links, and copyright information.
*   **LoginPopup:**  Allows users to sign in or create an account.

### Usage

The frontend is expected to be used as part of a larger food delivery application. Users will be able to browse the available food items, add items to their cart, and place orders. The application will also allow users to manage their accounts and track their orders.