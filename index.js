// Node.js program to demonstrate
// the fs.watchFile() method
  
// Import the filesystem module
const fs = require('fs');
var config = require('config');
  
fs.watchFile(
  
  // The name of the file to watch
  "./config/default.json",
  
  // The options parameter is used to 
  //modify the behaviour of the method
  {
    // Specify the use of big integers
    // in the Stats object 
    bigint: false,
  
    // Specify if the process should 
    // continue as long as file is
    // watched
    persistent: true,
  
    // Specify the interval between
    // each poll the file
    interval: 1000,
  },
  (curr, prev) => {
    console.log("\nThe file was edited");
  
    // Show the time when the file was modified
    console.log("Previous Modified Time", prev.mtime);
    console.log("Current Modified Time", curr.mtime);
  
    delete require.cache[require.resolve('config')];
    config = require("config");
    
    console.log(
      "The contents of the current file are:",
      config.get("config")
    );
  }
);

function main() {
    console.log(config.get("config"))
}

main();