import Stack from './1. 栈的实现'

const De2Bi = (num: number): number => {
  const s = new Stack<number>()
  while(num !== 0){
    s.push(num % 2)
    num = Math.floor(num / 2)
  }
  let str: string = ''
  while(!s.isEmpty()){
    str += s.pop()
  }
  return parseFloat(str)
}

console.log(De2Bi(2))