// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    var arr = str.split("");
    var count =0;

    for(var i=0; i< arr.length; i++){
        if(arr[i].toLowerCase()=='a' || arr[i].toLowerCase() =='e'|| arr[i].toLowerCase() =='i' || arr[i].toLowerCase()=='o' || arr[i].toLowerCase()=='u') {
            count ++;
        }
    }
    return count;

}

module.exports = vowels;
