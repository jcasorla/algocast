// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

str="abcba";
function palindrome(str) {
    arr= str.split('');

    for(var i =0;  i<arr.length/2; i++){
        // console.log(arr[i]);
        // console.log(arr[arr.length-i-1]);
        // console.log("end array");
        if(arr[i]!=arr[arr.length-i-1]){
            return false;
        }
    }
    return true;
}
console.log(palindrome(str));

module.exports = palindrome;

//solution per the tutorial
// function palin(str){
//     const reversed=str.split('').reversed.join;
//     return str===reversed;
// }
