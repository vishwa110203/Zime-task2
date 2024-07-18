
const { mySetInterval, myClearInterval } = require('./Interval');

// Set an interval
const id = mySetInterval(() => {
    console.log('Hello, world!');
}, 1000);

// Clear the interval after 5 seconds
setTimeout(() => {
    myClearInterval(id);
    console.log('Interval cleared');
}, 10000);
