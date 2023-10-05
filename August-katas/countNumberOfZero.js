function countNumberOfZeroes(n){
  const arr=[];
  for(let i=1 ;i<=n ;i++){
arr.push(i)
  }
 return arr.toString().split('').filter(n=>n==0).length
}
console.log(countNumberOfZeroes(10));