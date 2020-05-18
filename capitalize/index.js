// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

var str="test this now";
function capitalize(str) {
  var str2='';
  str2+=str[0].toUpperCase();
  for(var i=1; i<str.length; i++){
      if(str[i-1]==' '){
          str2+=str[i].toUpperCase();
      }else{
          str2+=str[i]
      }
    
  }
  
  return str2;
 

}
console.log(capitalize(str));

module.exports = capitalize;

// function capitalize(str) {
//     const words=[];
//     for (let word of str.split(' ')){
//         words.push(word[0].toUpperCase() + word.slice(1));
//     }
//     return words.join(' ');

// }
