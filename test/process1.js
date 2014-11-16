var Process = require(__dirname+'/../').Process;

module.exports = new Process({
  start: function() {
    var i = 0;
    console.log('start doing some things');
    setInterval(function() {
      console.log('keep doing things!');
      i++;
      if (i > 2) { throw new Error('eye eye, how exceptional!!') }
    }, 1000);
  }
});

