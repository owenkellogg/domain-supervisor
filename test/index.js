var Supervisor = require('../').Supervisor;

var proc1 = require('./process1');

var supervisor = new Supervisor();

var errors = 0;

supervisor.run(proc1, function(error, restart, crash) {
  errors++;
  if (errors > 3) {
    crash(error);
  } else {
    console.log('Don\'t worry I got it');
    console.log("restarting...");
    setTimeout(restart);
  }
});

