const mark={
    fullname:'Mark Miller',
    mass:78,
    height:1.69
   }
   const john={
    fullname:'John Smith',
    mass:92,
    height:1.95
   }
   function calBMI(height,mass){
       const bmi=mass/(height*height);
       return bmi;
   }
   function calBMI2(height,mass){
       const bmi=mass/(height*height);
       return bmi;
   }
   const MarkMiller=calBMI(mark.height,mark.mass);
   console.log(MarkMiller);
   const JohnSmith=calBMI2(john.height,john.mass)
   console.log(JohnSmith);
   if(MarkMiller>JohnSmith){
       console.log(`Mark Miller's BMI ${MarkMiller} is higher than John Simth's ${JohnSmith}`);
   }
   else{
       console.log(`Mark John's BMI ${JohnSmith} is higher than Mark Miller's ${MarkMiller}!`);
   }