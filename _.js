const _ = {
    clamp(number,lowerBound, upperBound) {
        if ( number < lowerBound) {
            return lowerBound;
        } else if (number > upperBound) {
            return upperBound;
        } else {
            return number;
        }
    },
    clamp2 (number,lowerBound, upperBound) {
        return number >= lowerBound && number <= upperBound ? number : (number < lowerBound ? lowerBound : upperBound);
    }
};



// Do not write or modify code below this line.
module.exports = _;