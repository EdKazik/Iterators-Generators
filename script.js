function Boo() {
  let i = 0;
  const arr = [1, 2];
  
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
