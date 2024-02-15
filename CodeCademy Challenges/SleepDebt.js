const getSleepHours = day => {
    switch (day) {
      case 'monday':
        return 7;
      case 'tuesday': 
        return 7;
      case 'wednesday':
        return 7;
      case 'thursday':
        return 7;
      case 'friday':
        return 7;
      case 'saturday':
        return 8;
      case 'sunday':
        return 8;
      default:
    }
  };
  console.log(getSleepHours('friday'));
  
  const getActualSleepHours =()=>{
    return (
       getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday")
    );
  };
  const getIdealSleepHours = ()=>{
    const idealSleepHours = 7.5;
    return idealSleepHours*7; 
  } 
  
  console.log(getActualSleepHours())
  console.log(getIdealSleepHours())
  
  const calculateSleepDebt = ()=>{
    const actualSleepHours = getActualSleepHours()
    const idealSleepHours = getIdealSleepHours()
    if (actualSleepHours === idealSleepHours){
      console.log(`You got the perfect amount of ${actualSleepHours} of sleep.`)
    } else if (actualSleepHours > idealSleepHours){
      console.log(`You slept ${actualSleepHours}hours, You got more sleep than needed.`)
    } else {
      console.log(`You slept ${actualSleepHours - idealSleepHours} hours less, You should get some rest.`)
    } 
  };
  
  calculateSleepDebt();