import Queue from './1. 队列实现'

function findWinner<T>(num: number, players: T[]): T{
 const queue = new Queue<T>()
  players.forEach(item => {
    queue.enqueue(item)
 })
 let index = 1
 while(queue.size() > 1){
  const current = queue.dequeue()
  if(index === num) {
    index = 1
    continue
  }
  queue.enqueue(current)
  index++
 }
 return queue.front() 
}

console.log(findWinner<string>(5, ['1', '2', '3', '4']))