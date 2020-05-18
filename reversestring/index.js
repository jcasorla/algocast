// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

str="apple";
function reverseS(str) {
    str2="";
    for(var i=str.length-1; i>=0; i--){
        str2+=str[i];

    }
    return str2;
    
}

console.log(reverseS(str));

module.exports = reverseS;
