///// Race


let raceNumber = Math.floor(Math.random() * 1000);
const runnersRegistEarly = true;
let runnersAge = 18;

if(runnersAge >= 18 && runnersRegistEarly){
  raceNumber += 1000;
  console.log('Runner is an adult and registered early.');
  
  if(runnersAge >= 18){
    console.log("You will race at 9:30 am. Race number: " + raceNumber);
  } else {
    console.log("Wait for your turn, thank you! Race number: " + raceNumber);
  }

} else if(runnersAge >= 18 && !runnersRegistEarly){
  console.log("You will race at 11:00 am. Race number: " + raceNumber);
} else {
  console.log('Runner is either not an adult or did not register early.');
}

if(runnersAge < 18){
  console.log("Finally! You will race at 12:30pm.\nWe're so exciting to see you. "+ raceNumber)
}