arr = ['nice', 'sweet', 'fishy', 'loving','peaceful'];

let word = '1000';

(() => {
    let word = '5000';
    console.log(word);
})();

var result = (() => {
    let result = '7000';
    return result;
})();

console.log(result);

let getValue = function(word) {
    let getValue = word;
    return getValue;
}

console.log(getValue('Power'));