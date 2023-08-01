// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.


function addLength(str) {
let array=[] //Empty array to contain the words from string

let arr=str.split(' ');// this line will transform a string into array
  for (let w of arr){
    
   array.push(w. concat(' ' , w.length)) //this line will get each and every word ,conact it with it's length
  
   }
   
  return array
}
console.log(addLength('apple ban'))

//LEARNT FROM OTHERS

// function addLength(str){
//   return str.split(" ").map(s => `${s} ${s.length}`)
// }

// ;
// var addLength = s => s.split(' ').map(x => x + ' ' + x.length);

// var addLength = s => s.split(' ').map(x => x + ' ' + x.length);

// function addLength(str) {
//   return str.split(' ').map(word => word + ' ' + word.length)
// }