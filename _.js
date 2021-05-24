const _ = {
    clamp(number,lowerBound,upperBound) {
        return number < lowerBound ? lowerBound : number > upperBound ? upperBound : number
    },

    inRange (number, start, end){
        if(!end){
            end = start;
            start = 0;
        }
        if(start > end) {
            let val = end;
            end = start;
            start = val;
        }
        return (number >= start && number < end);
    },

    words(sentence){
        let word = [];
        let words = [];
        for(let i = 0; i < sentence.length; i++){
            if(sentence[i] != ' ') word.push(sentence[i]);
            if((sentence[i] === ' ' || i === sentence.length - 1) && word != ''){
                words.push(word.join(''));
                word = [];
                continue;
            }
        }
        return words;
    },

    pad(string, length){

    }
};



// Do not write or modify code below this line.
module.exports = _;