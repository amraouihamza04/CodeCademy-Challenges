///////////////////////// Build a Library !!

// Define a parent class named Media
class Media {
    // Constructor to initialize common properties for all media types
    constructor(title) {
      this._title = title;            // Set the title
      this._isCheckedOut = false;     // Initialize checked-out status to false
      this._ratings = [];             // Initialize an empty array for ratings
    }
  
    // Getter for the title property
    get title() {
      return this._title;
    }
  
    // Getter for the isCheckedOut property
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    // Setter for the isCheckedOut property
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
  
    // Getter for the ratings property
    get ratings() {
      return this._ratings;
    }
  
    // Method to toggle the check-out status
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    // Method to calculate the average rating
    getAverageRating() {
      const sumOfRatings = this.ratings.reduce((acc, rating) => acc + rating, 0);
      const lengthOfRatings = this.ratings.length;
      return lengthOfRatings > 0 ? sumOfRatings / lengthOfRatings : 0;
    }
  
    // Method to add a new rating to the ratings array
    addRating(newRating) {
      this.ratings.push(newRating);
    }
  }
  
  // Define a subclass named Book that extends Media
  class Book extends Media {
    // Constructor to initialize Book-specific properties
    constructor(title, author, pages) {
      super(title);          // Call the constructor of the parent class (Media)
      this._author = author;  // Set the author
      this._pages = pages;    // Set the number of pages
    }
  
    // Getter for the author property
    get author() {
      return this._author;
    }
  
    // Getter for the pages property
    get pages() {
      return this._pages;
    }
  }
  
  // Define a subclass named Movie that extends Media
  class Movie extends Media {
    // Constructor to initialize Movie-specific properties
    constructor(title, director, runTime) {
      super(title);           // Call the constructor of the parent class (Media)
      this._director = director;   // Set the director
      this._runTime = runTime;     // Set the run time
    }
  
    // Getter for the director property
    get director() {
      return this._director;
    }
  
    // Getter for the runTime property
    get runTime() {
      return this._runTime;
    }
  }
  
  // Create an instance of the Book class named historyOfEverything
  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
  
  // Toggle the check-out status of historyOfEverything
  historyOfEverything.toggleCheckOutStatus();
  
  // Log the value saved to the isCheckedOut property
  console.log("isCheckedOut for historyOfEverything:", historyOfEverything.isCheckedOut);
  
  // Add three ratings (4, 5, and 5) to historyOfEverything
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  // Log the result of getAverageRating to the console
  console.log("Average Rating for historyOfEverything:", historyOfEverything.getAverageRating());
  
  // Create an instance of the Movie class named speed
  const speed = new Movie('Speed', 'Jan de Bont', 116);
  
  // Toggle the check-out status of speed
  speed.toggleCheckOutStatus();
  
  // Log the value saved to the isCheckedOut property for speed
  console.log("isCheckedOut for speed:", speed.isCheckedOut);
  
  // Add three ratings (1, 1, and 5) to speed
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  
  // Log the result of getAverageRating for speed to the console
  console.log("Average Rating for speed:", speed.getAverageRating());
  