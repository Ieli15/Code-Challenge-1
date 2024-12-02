//Create a function to check motorists' speed.
function checkSpeed(speed) {
    //Declaring 70 as the speed limit hence making it a constant variable.
    const speedLimit = 70;
    //Setting the multiple used to calculate the points to be deducted.
    const kmAboveLimit = 5;
    //Setting the max points for a licence to be suspend
    const maxPoints = 12;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        //Math.floor function helps us round off to the nearest integer.
        const points = Math.floor((speed - speedLimit) / kmAboveLimit);
        if (points > maxPoints) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${points}`);
        }
    }
}

// Function call.
checkSpeed();