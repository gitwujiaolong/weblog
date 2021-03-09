function reverseNum(num){
  let numLast = num % 10   //4 3 2 1
  let numLeft = Math.floor(num/10) //123 12 1 
  if(numLeft<1) return num
  return `${numLast}${reverseNum(numLeft)}`
}