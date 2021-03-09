'use strict'

function Animal (name, age) {
  this.name = name
  this.age = age
}

Animal.prototype.eat = function () { return true }

const rabbit = mynew(Animal, 'rabbit', 15)
console.log(rabbit.name)
console.log(rabbit.age)
console.log(rabbit.eat())

function Foo () { return { foo: 123 } }
console.log(new Foo())
console.log(mynew(Foo))

function mynew (target, ...args) {
  // return Reflect.construct(target, args)
  const obj = Object.create(target.prototype)
  const result = target.apply(obj, args)
  return result !== null && typeof result === 'object'
    ? result
    : obj
}

function myNew2(target,...args){
  const obj = {}
  obj.__proto__= target.prototype
  let res = target.call(obj,...args)
  return typeof res==='object'?res:obj
}

