// function deceleration
function calcAge1(birthYear){
     return  2037-birthYear;
}
// we can call the function before creating it in function deceleration
// function expression
const age1 =calcAge1(1991);
console.log(age1);
const calcAge2=function (birthYear){
    return  2037-birthYear;
}
const age2=calcAge2(1991);
console.log(age1,age2);