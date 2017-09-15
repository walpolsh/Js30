var tripletDiv = document.getElementById('triplets');

Array.prototype.random = function () {
  return this[Math.floor((Math.random() * this.length))];
};

const keys = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

const intervals = ['2nd', '3rd', '4th', '5th', '6th', '7th'];
const intervalsReversed = intervals.reverse();


const caged = ['position C', 'position A', 'position G', 'position E', 'position D'];
const direction = ['Down', 'Up'];

const triplets = () => {
  return 'Triplets. ' + 'Key: ' + keys.random() + '. CAGED: '
  + caged.random() + '. Intervals: ' + direction.random() + ' to ' + intervals.random()
  + ', ' + direction.random() + ' to ' + intervals.random();
};

const sixteenths = () => {
  var lineBreak = document.createElement('p'); //appendChild
  var item =  'Sixteeths. \n' + 'Key: ' + keys.random() + '. CAGED: '
  + caged.random() + '. Intervals: ' + direction.random() + ' to '
  + intervals.random() + ', ' + direction.random() + ' to ' + intervals.random()
  + ', ' + direction.random() + ' to ' + intervals.random();
  return item;
};

const intervalCombinations = (x) => {
  let results = [];
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  for (let i = 0; i < x.length - 1; i++) {
    // This is where you'll capture that last value
    for (let j = i + 1; j < x.length; j++) {
      results.push(`${x[j]} to ${x[i]} \n ${x[i]} to ${x[j]} \n `);
    }
  };

  return results;
};

const postIntervals = function () {
  var node = document.createElement('p');
  var textnode = document.createTextNode(intervalCombinations(intervals));
  var reversetextnode = document.createTextNode(intervalCombinations(intervalsReversed));
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  node.appendChild(checkbox);
  node.appendChild(textnode);
  document.getElementById('intervals').appendChild(node);
};

console.log(intervalCombinations(intervals));

const postTriplets = function () {
  var node = document.createElement('p');
  var textnode = document.createTextNode(triplets());
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  node.appendChild(checkbox);
  node.appendChild(textnode);
  document.getElementById('triplets').appendChild(node);
};

//appending sixteenths to html
const postSixteenths = function () {
  var node = document.createElement('p');
  var textnode = document.createTextNode(sixteenths());
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  node.appendChild(checkbox);
  node.appendChild(textnode);
  document.getElementById('sixteenths').appendChild(node);
};

const post10Triplets = function (x) {
  for (var i = 0; i <= x; i++) {
    var node = document.createElement('p');
    var textnode = document.createTextNode(triplets());
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    node.appendChild(checkbox);
    node.appendChild(textnode);
    document.getElementById('10triplets').appendChild(node);
  }
};

const post10Sixteenths = function (x) {
  for (var i = 0; i <= x; i++) {
    var node = document.createElement('p');
    var textnode = document.createTextNode(triplets());
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    node.appendChild(checkbox);
    node.appendChild(textnode);
    const tenSixteenths = document.getElementById('10sixteenths').appendChild(node);
  }
};
