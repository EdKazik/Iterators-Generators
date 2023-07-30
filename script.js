// function* Foo() {
//   console.log('start')
//   yield 1
//   yield 2
//   yield 3
//   console.log('finish')
// }

// const iterator = Foo()
// iterator.next().value // 1
// iterator.next().done // false

// // *******

// function Boo() {
//   // писати код тут
// }

// const iterator1 = Boo()
// iterator.next().value // 1
// iterator.next().done // false



function Boo() {
  let i = 0;
  const arr = [1, 2];
  const valuesArr = Object.values(arr);

  console.log(valuesArr)
  
  console.log('start');
    return {
      next: () => {
        if (i <= arr.length) {
          
          return {
            value: arr[i++],
            done: false,
          }
          
        } else {
          console.log('finish')
          return {done: true}
        }
      }
    }
}
const iterator = Boo()
// iterator.next().value // 1
// iterator.next().done // false

console.log(iterator.next().value) // 1
console.log(iterator.next().done) // false
