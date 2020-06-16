function fn(num, arr){
  let index = 1
  while(arr.length > 1){
    let current = arr.shift()
    if(index === num){
      index = 1
      continue
    }
    index++
    arr.push(current)
  }
  return arr[0]
}
console.log(fn(5, ['1', '2', '3']))