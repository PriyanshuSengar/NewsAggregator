const friend =['Lukcey','sengar'];
friend.push('Priyanshu');
// To Add Elements
console.log(friend);
console.log(friend.length);
// Add the Data at the starting
friend.unshift('Sengar');
console.log(friend);
// To Remove Elements
// Remove the Element from the last
friend.pop();
friend.pop();
console.log(friend);
friend.shift();
console.log(friend);
console.log(friend.indexOf('Lukcey'));
console.log(friend.indexOf('lukcey'));
console.log(friend.includes('luckey'));
console.log(friend.includes('Lukcey'));
if(friend.includes('Lukcey')){
    console.log("yes it is present ");
}
else{
    console.log("Not your friend");
}