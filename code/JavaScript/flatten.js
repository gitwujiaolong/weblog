let arr = [1,2,3,[4,5,6,[7,8,9]]]
function flatten(arr,res=[]){
  arr.forEach(item=>{
    if(item.constructor===Array){
      flatten(item,res)
    }else{
      res.push(item)
    }
  })
  return res
}
// 非递归写法，广度优先级
function flatten2(arr){
  let stacks = []
  let res = []
  for(let i=0;i<arr.length;i++){
    stacks.push(arr[i])
  }
  while(stacks.length){
    let item = stacks.shift()
    if(item.constructor===Array){
      stacks.unshift(...item)
    }else{
      res.push(item)
    }
  }
  return res
}

console.log(flatten2(arr))// [1,2,3,4,5,6,7,8,9]