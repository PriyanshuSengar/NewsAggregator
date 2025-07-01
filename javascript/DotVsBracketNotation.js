const Luckey={
    firstname:'luckey',
    lastname:'sengar',
    age:2024-2003,
    friends:['Tarun','Shivam']
}
console.log(Luckey);
console.log(Luckey.age);
console.log(Luckey['lastname']);
const namekey='name';
console.log(Luckey['first'+namekey]);
console.log(Luckey['last'+namekey]);
const intrest=prompt('What do you want know about Luckey ? Choose between firstname,lastname,age ,friends');
console.log(Luckey[intrest]);
if(Luckey[intrest]){
    console.log(Luckey[intrest]);
}
else{
    console.log('Invalid Data');
}
Luckey.location='Hathras';
Luckey['Instagram']='@luckeysengar';
console.log(Luckey);
console.log(`${Luckey.firstname} has ${Luckey.friends.length} friends , and his best friend is called ${Luckey.friends[0]}`);