////////////////// School Catalogue !!
// Class definition for the School
class School {
    // Constructor for initializing School instances
    constructor(name, level, numberOfStudents) {
      // Private property for school name
      this._name = name;
      // Private property for school level with validation
      this._level = ["primary", "middle", "high"].includes(level) ? level : "invalid";
      // Private property for the number of students
      this._numberOfStudents = numberOfStudents;
    }
  
    // Getter method for retrieving the school name
    get name() {
      return this._name;
    }
  
    // Getter method for retrieving the school level
    get level() {
      return this._level;
    }
  
    // Getter method for retrieving the number of students
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    // Setter method for setting the number of students with validation
    set numberOfStudents(value) {
      if (typeof value === "number") {
        this._numberOfStudents = value;
      } else {
        console.log("Invalid input: numberOfStudents must be set to a Number.");
      }
    }
  
    // Method for quickly displaying school facts
    quickFacts() {
      console.log(
        `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`
      );
    }
  
    // Static method for picking a substitute teacher randomly from a list
    static pickSubstituteTeacher(substituteTeachers) {
      const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[randomIndex];
    }
  }
  
  // Class definition for PrimarySchool, extending School
  class PrimarySchool extends School {
    // Constructor for initializing PrimarySchool instances
    constructor(name, numberOfStudents, pickupPolicy) {
      // Calling the parent class constructor
      super(name, "primary", numberOfStudents);
      // Private property for pickup policy
      this._pickupPolicy = pickupPolicy;
    }
  
    // Getter method for retrieving the pickup policy
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  // Class definition for HighSchool, extending School
  class HighSchool extends School {
    // Constructor for initializing HighSchool instances
    constructor(name, numberOfStudents, sportsTeams) {
      // Calling the parent class constructor
      super(name, "high", numberOfStudents);
      // Private property for sports teams
      this._sportsTeams = sportsTeams;
    }
  
    // Getter method for retrieving and displaying sports teams
    get sportsTeams() {
      console.log(`Sports Teams : ${this._sportsTeams.join(", ")}`);
      return this._sportsTeams;
    }
  }
  
  // Creating an instance of PrimarySchool
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  // Calling the quickFacts method on the lorraineHansbury instance
  lorraineHansbury.quickFacts();
  
  // Calling the pickSubstituteTeacher static method on the School class
  const substituteTeacher = School.pickSubstituteTeacher(["Jamal Crawford", "Lou Williams", "J. R. Smith", "James Harden", "Jason Terry", "Manu Ginobli"]);
  console.log(substituteTeacher);
  
  // Creating an instance of HighSchool
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  // Calling the sportsTeams method on the alSmith instance
  alSmith.sportsTeams;
  