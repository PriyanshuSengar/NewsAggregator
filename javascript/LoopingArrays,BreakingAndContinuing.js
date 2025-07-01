const luckey=[
'Lukcey',
'Sengar',
2024-2003,
'Full Stack Developer',
[
    'luckey','naveen','nicku','ankit'
]
];
const types=[];
for(let i=0;i<luckey.length;i++){
    console.log(luckey[i],typeof luckey[i]);
    // types[i]=typeof luckey[i];
    types.push(typeof luckey[i]);
}
console.log(types);
const years=[1991,2007,1969,2020];
const ages=[];
for (let i=0;i<years.length;i++){
    ages.push(2037-years[i]);
}
console.log(ages);
// continue and break
for(let i=0;i<luckey.length;i++){
    if(typeof luckey[i] !=='string') continue;
    console.log(luckey[i],typeof luckey[i]);
}
