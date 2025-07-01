const hadDriverLicense =true;
const hasGoodVision=false;
console.log(hasGoodVision && hadDriverLicense);
console.log(hasGoodVision || hadDriverLicense);
console.log(!hadDriverLicense);
const shouldDrive=hasGoodVision && hadDriverLicense;
if(shouldDrive){
    console.log("She is Eligible for Driving")
}
else{
    console.log("She is not eligible");
}