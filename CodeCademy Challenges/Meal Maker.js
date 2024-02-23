/////////////////////////// MEAL MAKER !!

// Create an object named 'menu' with properties '_meal' and '_price'
const menu = {
    _meal: "string",  // Set initial value for '_meal'
    _price: 10,       // Set initial value for '_price'
  
    // Setter method for '_meal'
    set meal(mealToCheck) {
      // Check if the provided value is a string
      if (typeof mealToCheck === "string") {
        // Assign the value to '_meal' if it's a string
        this._meal = mealToCheck;
      }
    },
  
    // Setter method for '_price'
    set price(priceToCheck) {
      // Check if the provided value is a number
      if (typeof priceToCheck === "number") {
        // Assign the value to '_price' if it's a number
        this._price = priceToCheck;
      }
    },
  
    // Getter method for 'todaysSpecial'
    get todaysSpecial() {
      // Check if both '_meal' and '_price' are truthy
      if (this._meal && this._price) {
        // Return a special message if both conditions are met
        return "Today's Special is Spaghetti for $5!";
      } else {
        // Return an error message if the conditions are not met
        return "Meal or price was not set correctly!";
      }
    },
  };
  
  // Update the '_meal' and '_price' properties
  menu._meal = "String";
  menu._price = 10;
  
  // Log the entire 'menu' object
  console.log(menu);
  
  // Log the result of the 'todaysSpecial' getter method
  console.log(menu.todaysSpecial);
  