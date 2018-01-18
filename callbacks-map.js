var words = ["ground", "control", "to", "major", "tom"];

var map = function (array, callback) {
  var output = []
  for (var i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }
  console.log(output)
};

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]


// two parameters - words  and    callback function

// map = value index array