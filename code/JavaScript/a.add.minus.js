let a = 10;
Number.prototype.add = function(n){
  return this.valueOf() + n
}
Number.prototype.minus = function(n){
  return this.valueOf() - n
}
console.log(a.add(3).minus(5)) // 8