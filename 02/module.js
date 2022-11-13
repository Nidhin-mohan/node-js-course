// const people = require('./people');
// console.log(people.people)

// const data = require('./people');
//     // reqiring file people.js to data
// console.log(data.people)
    

const { people, ages } = require("./people");
    // requiring people.js and destructuring it on people , ages 


console.log(people,ages);

const os = require('os')

//os is an node in-built module

console.log(os.platform(), os.homedir())
 // os.platform() return the system we are in and os.homedir() return the home directory
 