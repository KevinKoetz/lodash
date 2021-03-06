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
        let chars = '';
        let words = [];
        for(let i = 0; i < sentence.length; i++){
            if(sentence[i] != ' '){chars = chars + sentence[i]; continue;}
            if((sentence[i] === ' ' || i === sentence.length - 1) && chars != ''){
                words.push(chars);
                chars = '';
            }
        }

        if(chars != ''){
            words.push(chars);
            chars = '';
        }
        return words;
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
    },

    has(obj, key){
        return obj[key] === undefined ? false : true;
    },

    invert(obj){
        newObj = {};
        objKeys = Object.keys(obj);

        for(let i = 0; i < objKeys.length; i++){
            newObj[obj[objKeys[i]]] = objKeys[i];
        }

        return newObj;
    },

    findKey(obj, func){
        objKeys = Object.keys(obj);
        for(let i = 0; i < objKeys.length; i++){
            if(func(obj[objKeys[i]])) return objKeys[i];
        }
        return undefined;
    },

    drop(array, elementsToDrop = 1){
        return array.slice(elementsToDrop);

    },

    dropWhile(array, predFunc){
        let index = 0;
        let element = array[index];
        while(predFunc(element, index, array)){
            index++;
            element = array[index];
        }
        return this.drop(array, index);
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

let input = undefined
iterations = 100;

// Do not write or modify code below this line.
module.exports = _;