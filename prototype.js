// 数组的原型对象也是数组
console.log(Array.prototype)

function F(name) {
  this.name = name
}

let f = new F('foo')

// console.log('F.__proto__', F.__proto__)
// console.log('F.prototype === F.__proto__', F.prototype === F.__proto__)
// console.log(
//   'F.__proto__ === Function.prototype',
//   F.__proto__ === Function.prototype
// )

// console.log('f.__proto__.constructor === F', f.__proto__.constructor === F)

// console.log('f.prototype', f.prototype) // undefind 不能直接访问
// console.log('f.prototype', Object.getPrototypeOf(f)) // {}
// console.log(
//   'f.__proto__ === f.prototype',
//   f.__proto__ === Object.getPrototypeOf(f)
// ) // true

// console.log('f-----', f)
// console.log('f.__proto__', f.__proto__)
// console.log('f.__proto__ === F.prototype', f.__proto__ === F.prototype)

// console.log('F.prototype.__proto__', F.prototype.__proto__)
// console.log(
//   'F.prototype.__proto__ === Object.prototype',
//   F.prototype.__proto__ === Object.prototype
// )

// console.log('Object.prototype.__proto__', Object.prototype.__proto__)
// console.log(
//   'Object.prototype.__proto__ === null',
//   Object.prototype.__proto__ === null
// )

/* 
类似这样的关系
f {
  name: 'foo',
  __proto__: F.prototype = {
    __proto__: Object.prototype = {
      __proto__: null
    }
  }
}

*/
