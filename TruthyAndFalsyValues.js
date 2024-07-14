// there are five falsy values 
// 0,'',NaN,null,undefined
console.log(Boolean(0));
console.log(Boolean(Boolean));
console.log(Boolean('Luckey'));
console.log(Boolean({}));
const money=0;
if(money){
    console.log("Don't Spend it all");
}
else{
    console.log("You should get a job");
}
let height;
if(height){
    console.log("YAY! height is defined")
}
else{
    console.log("height is not defined")
}