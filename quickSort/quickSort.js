
//divide and conquer
/*
0 recognize base case
1 divide: break problem down during each call
2. conquer: do work on each subset
3. combine: none
*/

function Graph () {
  this._nodes = {};
}

Graph.prototype.addNode = function (value) {
  if (value === undefined) return;
  this._nodes[value] = this._nodes[value] || [];
};

myGraph = new Graph()
{_nodes: {}}

myGraph.addNode('pickles')
{_nodes: {'pickles': []}};

myGraph.addNode('dobby')
{_nodes: {'pickles':[], 'dobby':[]}}

myGraph.addNode('gibson');
{_nodes: {'pickles':[], 'dobby':[], 'gibson':[]}}

Graph.prototype.addEdge = function(value1, value2) {
  if (!this._nodes[value1] || !this._nodes[value2])
    return 'Invalid node value';
  this._nodes[value1].push(value2);
  this._nodes[value2].push(value1);
};
{_nodes: {'pickles':['dobby', 'gibson'], 'dobby':['pickles', 'gibson'], 'gibson':['dobby', 'pickles']}}

myGraph.addEdge('dobby', 'pickles');
myGraph.addEdge('gibson', 'dobby');
myGraph.addEdge('gibson', 'pickles');

console.log(myGraph);

/*'dobby' --- 'pickles'
     |       /
  'gibson'
*/
