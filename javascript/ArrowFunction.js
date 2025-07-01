const calcage3=birthyear=>2037 - birthyear;
const age3 =calcage3 (1991);
console.log(age3);
const yearUntioRetirement =(birthyear,firstName)=> {
    const age =2037-birthyear;
    const retirement =65-age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearUntioRetirement(1991 ,'Luckey'));
console.log(yearUntioRetirement(1991,'Bob'));