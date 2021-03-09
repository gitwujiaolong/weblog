class LazyManClass {
  constructor(name){
    this.name = name
    this.queue = []
    setTimeout(()=>{
      console.log(`Hi I am ${name}`)
      this.next()
    },0)
  }
  eat(food){
    const fn = ()=>{
      console.log(`I am eating ${food}`)
      this.next()
    }
    this.queue.push(fn)
    return this
  }
  sleep(time){
    const fn = ()=>{
      setTimeout(()=>{
        console.log(`等待了${time}秒`)
        this.next()
      },time)
    }
    this.queue.push(fn)
    return this
  }
  next(){
    const fn = this.queue.shift()
    console.log('fn', fn)
    fn&&fn()
  }
}
let lz = new LazyManClass('wjl')
lz.eat('早饭').sleep(1000).eat('午饭')