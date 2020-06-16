class QueueElement<T>{
  constructor(public priority: number, public element: T){}
}

class PriorityQueue<T> {
  private items: QueueElement<T>[] = []
  enqueue(element: T, priority: number): void{
    const queueElement = new QueueElement<T>(priority, element)
    if(!this.items.length){
      this.items.push(queueElement)
      return
    }
    const isInsert = this.items.some((item: QueueElement<T>, index: number): boolean => {
      if(item.priority >= priority){
        this.items.splice(index, 0, queueElement)
        return true
      }
      return false
    })
    if(!isInsert) this.items.push(queueElement)
  }
  dequeue(): T{
    return this.items.shift().element
  }
  size(): number {
    return this.items.length
  }
  isEmpty(): boolean {
    return this.items.length === 0
  }
  toString(): string {
    return this.items.map((item: QueueElement<T>) => item.element).toString()
  }
}

const q = new PriorityQueue<string>()
q.enqueue('1', 1)
q.enqueue('2', 0)
q.enqueue('3', 2)
console.log(q.toString())
