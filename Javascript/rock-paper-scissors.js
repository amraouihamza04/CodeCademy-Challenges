// rock, paper & scissors JS


console.log("hi");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" || userInput === "paper" 
    || userInput === "scissors" || userInput == "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error! please type: rock, paper or scissors");
  }
};
console.log(getUserChoice("paper"));

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};
// console.log(getComputerChoice())
// console.log(getComputerChoice())
// console.log(getComputerChoice())

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb"){
    return "You won ! Bomb Always Win."
  }
  if (userChoice === computerChoice) {
    return "This game is a tie !";
  }
  if (userChoice === "rock" && computerChoice === "paper") {
    return "Sorry, Computer won !";
  } else {
    return "Congratulation, You won !";
  }
  if (userChoice === "paper" && computerChoice === "scissors") {
    return "Sorry, Computer won !";
  } else {
    return "Congratulation, You won !";
  }
  if (userChoice === "scissors" && computerChoice === "rock") {
    return "Sorry, Computer won !";
  } else {
    return "Congratulation, You won !";
  }
};
console.log(determineWinner("rock","paper"))

const playGame = () => {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();
  console.log("You choose: " + userChoice);
  console.log("The computer choose: " + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};
playGame();