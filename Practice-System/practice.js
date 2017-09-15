var tripletDiv = document.getElementById('triplets');

Array.prototype.random = function () {
  return this[Math.floor((Math.random() * this.length))];
};

const scales = [['minor 1 2 b3 4 5 b6 b7'], ['dorian 1 2 b3 4 5 6 b7'],
['lydian dominant 1 2 3 #4 5 6 7'], ['phrygian dominant 1 b2 3 4 5 b6 b7.'],
['half-whole 1 b2 b3 3 b5 5 6 b7'], ['whole-half 1 2 b3 4 b5 b6 6 7']]

const keys = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

const intervals = ['2nd', '3rd', '4th', '5th', '6th', '7th'];

const caged = ['C', 'A', 'G', 'E', 'D'];
const direction = ['Down', 'Up'];``

const triplets = () => {
  return scales.random() + '\n' + 'Key: ' + keys.random() + '.\nCAGED: '
  + caged.random() + '.\nIntervals: ' + direction[1] + ' a ' + intervals.random()
  + ', ' + direction[1] + ' a ' + intervals.random();
};

const sixteenths = () => {
  var lineBreak = document.createElement('p'); //appendChild
  var item =  scales.random() + '\n' + 'Key: ' + keys.random() + '.\nCAGED position: '
  + caged.random() + '.\nIntervals: ' + direction[1] + ' a '
  + intervals.random() + ', ' + direction[1] + ' a ' + intervals.random()
  + ', ' + direction[0] + ' a ' + intervals.random();
  return item;
};

const intervalCombinations = (x) => {
  let results = [];
  for (let i = 0; i < x.length - 1; i++) {
    // This is where you'll capture that last value
    for (let j = i + 1; j < x.length; j++) {
      results.push(`${x[j]} to ${x[i]} - ${x[i]} to ${x[j]}\n`);
    }
  };

  return results.join(' ');
  console.log()
};

const postIntervals = function () {
  var node = document.createElement('ul');
  var textnode = document.createTextNode(intervalCombinations(intervals));
  // var checkbox = document.createElement('input');
  // checkbox.type = 'checkbox';
  // node.appendChild(checkbox);
  node.appendChild(textnode);
  document.getElementById('intervals').appendChild(node);
};

console.trace(intervals);

const postTriplets = function () {
  var node = document.createElement('ul');
  var textnode = document.createTextNode(triplets());
  // var checkbox = document.createElement('input');
  // checkbox.type = 'checkbox';
  // node.appendChild(checkbox);
  node.appendChild(textnode);
  document.getElementById('triplets').appendChild(node);
};

//appending sixteenths to html
const postSixteenths = function () {
  var node = document.createElement('ul');
  var textnode = document.createTextNode(sixteenths());
  // var checkbox = document.createElement('input');
  // checkbox.type = 'checkbox';
  // node.appendChild(checkbox);
  node.appendChild(textnode);
  document.getElementById('sixteenths').appendChild(node);
};

const post10Triplets = function (x) {
  for (var i = 0; i <= x; i++) {
    var node = document.createElement('ul');
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
    var node = document.createElement('ul');
    var textnode = document.createTextNode(triplets());
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    node.appendChild(checkbox);
    node.appendChild(textnode);
    const tenSixteenths = document.getElementById('10sixteenths').appendChild(node);
  }
};
