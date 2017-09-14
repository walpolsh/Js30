var tripletDiv = document.getElementById('triplets');

Array.prototype.random = function () {
  return this[Math.floor((Math.random() * this.length))];
};

const keys = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

const intervals = ['2nd', '3rd', '4th', '5th', '6th', '7th'];

const caged = ['position C', 'position A', 'position G', 'position E', 'position D'];
const direction = ['Down', 'Up'];

const triplets = () => {
  return 'Triplets. ' + 'Key: ' + keys.random() + '. CAGED: '
  + caged.random() + '. Intervals: ' + direction.random() + ' to ' + intervals.random()
  + ', ' + direction.random() + ' to ' + intervals.random();
};

const postTriplets = function () {
  var node = document.createElement('LI');
  var textnode = document.createTextNode(triplets());
  node.appendChild(textnode);
  document.getElementById('triplets').appendChild(node);
};

const sixteenths = () => {
  return 'Sixteeths. ' + 'Key: ' + keys.random() + '. CAGED: ' + caged.random()
  + '. Intervals: ' + direction.random() + ' to ' + intervals.random() + ', ' + direction.random()
  + ' to ' + intervals.random() + ', ' + direction.random() + ' to ' + intervals.random();
};

const postSixteenths = function () {
  var node = document.createElement('LI');
  var textnode = document.createTextNode(sixteenths());
  node.appendChild(textnode);
  document.getElementById('sixteenths').appendChild(node);
};
