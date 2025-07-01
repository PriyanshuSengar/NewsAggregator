// "==="(Strict)
// "=="(Loose)
const age='18';
if(age===18){
    console.log('You just become and adult (Strict)');
}
if(age==18){
    console.log('You just become and adult (loose)');
}
const favorite =Number(prompt("What's your Favorite Number"));
console.log(favorite);
console.log(typeof favorite);
if(favorite===22){
    console.log("22 is the correct number");
}
else if(favorite===11){
    console.log("the number is 11 not 22")
}
else{
    console.log("number is neither 11 nor 22")
}
if(favorite!==23){
    console.log("Why not 23");
}