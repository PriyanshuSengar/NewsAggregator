const measureKelvin=function(){
    const measurement={
        type:'temp',
        unit:'cels',
        value:Number( prompt('Degrees celsius')),
    };
    console.log(measurement);
    console.table(measurement);
    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);
    const kelvin=measurement.value + 273;
    return kelvin;
}
console.log(measureKelvin());