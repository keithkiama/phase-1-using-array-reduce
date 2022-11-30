const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// Code your solution here
const totalBatteries = batteryBatches.reduce((accumulator,currentValue) => { return accumulator + currentValue}, 0);//0 is the first index where counting starts
console.log(totalBatteries)

