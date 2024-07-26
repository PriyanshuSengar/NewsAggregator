const calAge=function(birthYear){
    return 2037-birthYear;
}

const yearUntilRetirement = function (birthYear, firstname)  {
  const age = calAge(birthYear);
  const retirement = 65 - age;
  // return retirement; 
  if(retirement>0){
    console.log(`${firstname} has already not retired .`);
    return retirement;
  } else{  
      console.log(`${firstname} has already retired .`);
    return -1;
  }
  // return `${firstname} retires in ${retirement} years`;
 
}
console.log(yearUntilRetirement(1991,'Luckey'));
console.log(yearUntilRetirement(1997,'Naveen'));
// Function Deceleration
// const calAge=function(birthYear){
//   return 2037-birthYear;
// }
// Function Expression
// const calcAge =function (birthyear){
//   return 2037 - birthyear;
// }
// Arrow Function
// const calcAge=birthyear=>
// 2037-birthyear