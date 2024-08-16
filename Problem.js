const temp=[
    3,-2,-6,-1,'error',9,13,17,15,14,9,4
];
const calTempAmplitude=function (temp){
    let max=temp[0];
    let min=temp[0];
    
for(let i=0;i<temp.length;i++){
    const current=temp[i];
    if(typeof current!=='number')continue;
if(current>max)max=current;
if(current<min)min=current;
}
console.log(max,min);
return max-min;
};
const aplitude =calTempAmplitude(temp);
console.log(aplitude);