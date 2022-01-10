exports.getDate = function() {
    const today = new Date();

    //custom how day will be shown
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    //grabs the date string and format following options
    return today.toLocaleDateString("en-US", options);
}

//anonymous function
exports.getDay = function() {
    const today = new Date();

    //custom how day will be shown
    const options = {
        weekday: "long",
    };

    //grabs the date string and format following options
    return today.toLocaleDateString("en-US", options);
}