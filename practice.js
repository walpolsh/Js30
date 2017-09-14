const keys = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

const randomKey = keys[Math.floor(Math.random() * keys.length)];

console.log(randomKey);

const intervals = ['2nd', '3rd', '4th', '5th', '6th', '7th'];

const randomInterval = intervals[Math.floor(Math.random() * intervals.length)];
const randomInterval2 = intervals[Math.floor(Math.random() * intervals.length)];
const randomInterval3 = intervals[Math.floor(Math.random() * intervals.length)];

console.log(randomInterval);

const caged = ['position C', 'position A', 'position G', 'position E', 'position D']
const randomCaged = caged[Math.floor(Math.random() * caged.length)];

const upDown3 = [['Down Down'], ['Up Up']];
const upDown4 = [['Down Down Up'], ['Up Up Down']];
const randomUpDown3 = upDown3[Math.floor(Math.random() * upDown3.length)];
const randomUpDown4 = upDown4[Math.floor(Math.random() * upDown4.length)];

const triplets = 'Thirds. '+ 'Key: ' + randomKey + '. CAGED position: ' + randomCaged + ". Order: " + randomUpDown3 + ". Intervals: " + randomInterval + ' to ' + randomInterval2;
console.log(triplets);

const sixteenths = '16th Notes. '+ 'Key: ' + randomKey + '. CAGED position: ' + randomCaged +  ". Order: " + randomUpDown4 + ". Intervals: " + randomInterval + ' to ' + randomInterval2 + ' to ' + randomInterval3;
console.log(sixteenths);
