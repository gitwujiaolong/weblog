function maopao(arr){
  const array = [...arr]
  let isOk = true
  let len = arr.length
  for(let i=0; i<len-1; i++ ){
    for(let j = i+1;j<len;j++){
      if(array[i]>array[j]){
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
        isOk = false
      }
    }
    if(isOk){
      break
    }
  }
  return array
}
let arr = [5,1,8,3,2,10,23,0]
console.log(maopao(arr))