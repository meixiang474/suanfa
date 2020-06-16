class Node<T> {
  public next: Node<T> = null
  public data: T
  public prev: Node<T> = null
  constructor(data: T){
    this.data = data
  } 
}

export default class LinkList<T> {
  private head: Node<T> = null
  private tail: Node<T> = null
  private length: number = 0
  append(data: T): void{
    const newNode = new Node<T>(data)
    if(!this.length){
      this.head = this.tail = newNode
    }else{
      let current = this.tail
      this.tail.next = newNode
      this.tail = newNode
      this.tail.prev = current
    }
    this.length++
  }
  insert(position: number, data: T): boolean {
    if(position < 0 || position > this.length) return false
    if(position === this.length){
      this.append(data)
      return true
    }
    const newNode = new Node<T>(data)
    if(!position){
      const next = this.head
      this.head = newNode
      this.head.next = next
      next.prev = this.head
    }else{
      let index = 0
      let current = this.head
      while(++index < position){
        current = current.next
      }
      const next = current.next
      current.next = newNode
      newNode.prev = current
      newNode.next = next
    }
    this.length++
    return true
  }
  get(position: number): T{
    if(position < 0 || position >= this.length) return null
    let index = 0
    let current = this.head
    while(index++ < position){
      current = current.next
    }
    return current.data
  }
  indexOf(data: T): number {
    let index = 0
    let current = this.head
    while(current){
      if(current.data === data){
        return index
      }
      index++
      current = current.next
    }
    return -1
  }
  update(position: number, data: T): boolean{
    if(position < 0 || position >= this.length) return false
    let current = this.head
    let index = 0
    while(index++ < position){
      current = current.next
    }
    current.data = data
    return true
  }
  removeAt(position: number): T{
    if(position < 0 || position >= this.length) return null
    let res: Node<T> = null
    if(!position){
      res = this.head
      this.head = this.head.next
      if(this.length === 1){
        this.tail = null
        return res.data
      }
      this.head.prev = null
    }else if(position === this.length - 1){
      res = this.tail
      this.tail = this.tail.prev
      this.tail.next = null
    }else{
      let current = this.head
      let index = 0
      while(++index < position){
        current = current.next
      }
      res = current.next
      let next = current.next.next
      current.next = next
      current.next.prev = current
    }
    this.length--
    return res.data
  }
  remove(data: T): T{
    const index = this.indexOf(data)
    return this.removeAt(index)
  }
  size(): number{
    return this.length
  }
  isEmpty(): boolean{
    return this.length === 0
  }
  toString(): string{
    let current = this.head
    let res: T[] = []
    while(current){
      res.push(current.data)
      current = current.next
    }
    return res.toString()
  }
}
const ll = new LinkList<string>()
ll.append('0')
ll.append('0')
ll.removeAt(0)
console.log(ll.toString())