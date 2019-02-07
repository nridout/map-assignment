// function that takes an array to map and a callback function, and
// returns a new array based on the results of the callback function
function map(arr, callback) {
  // set empty array to hold the output
  var output = [];
  // iterate through each item in the array
  arr.forEach(function(value, index) {
    //create a new variable that passes the value through the callback function
    var result = callback(value);
    //push the resulting value to the output array
    output.push(result);
    });
  //log the results
  console.log(output);
}


var words = ["ground", "control", "to", "major", "tom"];

//sample callback function
map(words, function(word) {
  return word.length;
});
//sample callback function
map(words, function(word) {
  return word.toUpperCase();
});
//sample callback function
map(words, function(word) {
  return word.split('').reverse().join('');
});

//  expected test results
// [6, 7, 2, 5, 3]
// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]
// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]