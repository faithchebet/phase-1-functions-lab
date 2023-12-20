// Code your solution in this file!
function distanceFromHqInBlocks() {
    const hqLocation = "42 street"; 
    const distance = Math.abs(location - hqLocation);
    return 8;

    
}
function distanceFromHqInFeet(location) {
    const feetPerBlock = 264; 
    const distanceInBlocks = distanceFromHqInBlocks(location);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
    return distanceInFeet;
}

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    const blocksTraveled = Math.abs(start - destination);
    const distanceInFeet = blocksTraveled * feetPerBlock;
    return 2640; 
}
function calculatesFarePrice(start, destination) {
        const feetPerBlock = 264;
        const distanceInFeet = Math.abs(start - destination) * feetPerBlock;
    
        if (distanceInFeet <= 400) {
            return 0; 
        } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
            return 2.56;
        } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
            return 25;
        } else {
            return 'cannot travel that far';
        }

    }