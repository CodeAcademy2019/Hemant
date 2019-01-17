module.exports = function(namespace) {
    // SOLUTION GOES HERE
    return console.log.bind(null, namespace);
  }

  setTimeout(() => console.log('jk'));
  while(true);