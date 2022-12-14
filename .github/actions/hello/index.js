import core from '@actions/core';
import github from '@actions/github';
try {
//throw(new Error("Some error"));
const whoToGreet = core.getInput('who-to-greet');
console.log(`Hello ${whoToGreet}`);

const time = new Date();
core.setOutput("time",time.toTimeString());
console.log(JSON.stringify(github,null,'\t'));
} catch (error) {
github.setFailed(error.message);
}

