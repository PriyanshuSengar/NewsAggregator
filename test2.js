const bills=[22,295,176,440,37,,105,10,1100,86,52];
// const calTip =funcrtion(bills){
//     return bills>=50 && bills<= 300 ? bills*0.15:bills*0.2;
// }
const tips=[];
const totals=[];
for(let i=0;i<bills.length;i++){
    const tip=calTip(bills[i]);
    tips.push(tip);
    totals.push(tip+bill[i]);
}
console.log(bills,tips,totals);
const calAverage=function(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    console.log(sum);
    return sum/arr.length;
}
console.log(calAverage([2,3,7]));