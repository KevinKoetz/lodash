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
        let chars = [];
        let words = [];
        for(let i = 0; i < sentence.length; i++){
            if(sentence[i] != ' ') chars.push(sentence[i]);
            if((sentence[i] === ' ' || i === sentence.length - 1) && chars != []){
                words.push(chars.join(''));
                chars = [];
            }
        }
        return words;
    },

    words2(sentence){
        return sentence.split(' ');
    },

    pad(string, length){
        if(string.length >= length) return string;
        let numPads = length - string.length;
        let newString = '';
        for(let i = 1; i * 2 <= numPads; i++){
            newString = newString + ' ';
        }
        newString = newString + string;
        for(let i = 1; i * 2 <= numPads + 1; i++){
            newString = newString + ' ';
        }
        return newString;
    }
};



function measureRuntime(func, iterations = 1, ...rest){
    const { performance } = require('perf_hooks');
    if(iterations < 1) return NaN;
    let start = performance.now();
    for(let i = 1; i <= iterations; i++){
        func(...rest);
    }
    return (performance.now()-start)/iterations;
}

let input = 'a ';
for(let i = 0; i<=20; i++) input = input + input;
iterations = 100;

console.log(measureRuntime(_.words, iterations, input));
console.log(measureRuntime(_.words2, iterations, input));

// Do not write or modify code below this line.
module.exports = _;