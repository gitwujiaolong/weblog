// 深度优先遍历
/* 
  简单来讲，就是自上而下遍历搜索
*/
//递归写法
function dts(node){
  let nodes = []
  if(node){
    nodes.push(node)
    let childrens = node.children
    for(let i=0;i<childrens.length;i++){
      dts(childrens[i])
    }
    return nodes
  }
}
// [node] - > node[] -> 
/* function dts2(node){
  let nodes = []
  if(node){
    let stack = []
    stack.push(node)
    while(stack.length){
      let item = stack.pop()
      nodes.push(item)
      let children = item.children
      for(let i=children.length-1;i>=0;i--){
        stack.push(children[i])
      }
    }
  }
  return nodes
} */
// 
//广度优先遍历
function wds(node){
  let nodes = []
  if(node){
    let queue = []
    queue.unshift(node)
    while(queue.length){
      let item = queue.shift()
      nodes.push(item)
      let children = item.children
      for(let i =0;i<children.length;i++){
        queue.push(children[i])
      }
    }
  }
  return nodes
}


