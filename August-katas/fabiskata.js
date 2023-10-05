/**  by using js solve this Ben has a very simple idea to make some profit: 
 * he buys something and sells it again. Of course, this wouldn't give him any profit at all
 *  if he was simply to buy and sell it at the same price. Instead,
 *  he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. 
Also, your function will always get an array or a list, you don't have to check for null, undefined or similar. */

function minMaxCount(arr){
//  return [Math.min(...arr) , Math.max(...arr)]
const sortedArr= arr.sort((a,b)=>a-b)
return [sortedArr[0],sortedArr[sortedArr.length-1]]

}

console.log(minMaxCount([2334454,5]));

/** 	function minMax(arr) {
		var a = arr.sort(function(a,b) {return a-b});
		return [a[0], a[a.length-1]];
	} */

  /** Note: This kata is inspired by Convert a Number to a String!. Try that one too.

Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7 */

const stringToNumber = function(str) {
  return Number(str)
}

console.log(stringToNumber(" 23345"));