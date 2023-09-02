//Function 1: create days & corresponding sleep.
const getSleepHours = day => //arrow function w/ 1 parameter.
{
  if (day === "monday")
  {
    return 8;
  }
  else if (day === "tuesday")
  {
    return 15;
  }
  else if (day === "wednesday")
  {
    return 6;
  } 
  else if (day === "thursday")
  {
    return 3;
  } 
  else if (day === "friday")
  {
    return 9;
  } 
  else if (day === "saturday")
  {
    return 7;
  }  
  else if (day === "sunday")
  {
    return 7;
  } 
}; //closes function 1.

//Function 2: sum of sleep over 7 days.
const getActualSleepHours = () => //arrow function w/ 0 parameters.
{
  return getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday");
}; //closes function 2.

//Function 3: create personal goal for sleep over 7 days.
const getIdealSleepHours = () => //arrow function w/ 0 parameters.
{
  var idealHours = 7; //7 per night.
  return idealHours * 7; //49 per week.
}; //closes function 3.
//testing functions 2 & 3:
//console.log(getActualSleepHours()); //55 per week.
//console.log(getIdealSleepHours()); //49 per week.

//Function 4: comparing actual sleep vs ideal sleep.
const calculateSleepDebt = () => //arrow function w/ 0 parameters.
{
  var actualSleepHours = getActualSleepHours(); //55.
  var idealSleepHours = getIdealSleepHours(); //49.

  //logic for determining sleep debt.
  if (actualSleepHours === idealSleepHours)
  {
    console.log("You got perfect sleep last week.");
  }
  else if (actualSleepHours > idealSleepHours)
  {
    var excess = actualSleepHours - idealSleepHours;
    console.log("You got " + excess + " more hours of sleep than needed last week."); 
  }
  else if (actualSleepHours < idealSleepHours)
  {
    var deficit = actualSleepHours - idealSleepHours;
    console.log("You got " + deficit + " less hours of sleep than needed last week."); 
  }
}; //closes function 4.

calculateSleepDebt(); //starts program **no arguments needed here**.
