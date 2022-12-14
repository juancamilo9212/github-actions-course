const core = require('@actions/core');
const github = require('@actions/github');

//throw(new Error("Some error"));
const whoToGreet = core.getInput('who-to-greet');
console.log(`Hello ${whoToGreet}`);

const time = new Date();
core.setOutput("time",time.toTimeString());
console.log(JSON.stringify(github,null,'\t'));


