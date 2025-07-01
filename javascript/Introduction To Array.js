const Friend1='Naveen';
const Friend2='Nicku';
const Friend3='Ankit';
const friends=['Naveen','Nicku','Ankit'];
console.log(friends);
const years =(1991,1984,2008,2024);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length-1]);  
friends[2]='luckey';
console.log(friends);
// arrays are mutuable even initialised by the cosnt
const luckey=['luckey','Full Stack Developer',2024-2003,friends];
console.log(luckey);
const calAge= function (birthyear){
    return 2024-birthyear;
}
const year=[1990,1967,2002,2010,2018];
const age1=calAge(year[0]);
const age2=calAge(year[1]);
const age3=calAge(year[year.length-1]);
console.log(age1,age2,age3);
const Ages=[age1,age2,age3];
console.log(Ages);