const intervals = new Map();
let intervalId = 0;

function mySetInterval(callback, delay) {
    // Generate a unique ID for this interval
    const id = intervalId++;
    
    function repeat() {
        // Call the callback function
        callback();
        // Schedule the next execution
        if (intervals.has(id)) {
            intervals.set(id, setTimeout(repeat, delay));
        }
    }

    // Schedule the first execution
    intervals.set(id, setTimeout(repeat, delay));

    // Return the interval ID
    return id;
}

function myClearInterval(id) {
    // Clear the timeout and remove the interval from the map
    if (intervals.has(id)) {
        clearTimeout(intervals.get(id));
        intervals.delete(id);
    }
}

// Export the functions for use in other modules
module.exports = {
    mySetInterval,
    myClearInterval
};
