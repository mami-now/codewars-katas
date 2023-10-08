function findSmallestInt(array) {
// const newArr=array.sort((a,b)=>a-b)
 
//   return newArr[0]
// return Math.min(...array)
return array.sort((a,b)=>a-b)[0]

 }
console.log(findSmallestInt([34, 15, 88, 2]));