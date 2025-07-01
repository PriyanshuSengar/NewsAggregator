// same as the previous test but their only one difference which is that we have to merge two arrays into one 
const calTempAmplitudeNew=function (t1,t2){
const temps=t1.concat(t2);
console.log(temps);
    let max=temps[0];
    let min=temps[0];
    
for(let i=0;i<temps.length;i++){
    const current=temps[i];
    if(typeof current!=='number')continue;
if(current>max)max=current;
if(current<min)min=current;
}
console.log(max,min);
return max-min;
};
const aplitudeNew =calTempAmplitudeNew([3,5,1],[9,0,5]);
console.log(aplitudeNew);
