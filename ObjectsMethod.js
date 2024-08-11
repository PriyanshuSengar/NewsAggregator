const luckey={
    firstname:'luckey',
    lastname:'sengar',
    // age:2024-2003,
    job:'Full Stack Developer',
    friends:['Tarun','Shivam'],
    hasDriverlicence:true,
    birthyear:2003,
    // calAge:function (){   
    //     return 2024- this.birthyear;
    // }
    // calAge:function (){
    //     console.log(this);    
    //     return 2024- this.birthyear;
    // }
    calAge:function (){
        // console.log(this); 
        this.age=  2024- this.birthyear 
        return this.age;
    },
    getsummary:function(){
return `${this.firstname} is a ${this.calAge()} old ${this.job} , and has ${this.hasDriverlicence ? 'a':'no'} driver license.`;
    }
};
console.log(luckey.calAge());
console.log(luckey.age);
console.log(luckey.getsummary());

