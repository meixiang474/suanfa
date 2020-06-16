class ListNode<T> {
  public next: ListNode<T>
  constructor(public data: T) {}
}

class LinkList<T> {
  private head: ListNode<T>
  private length: number = 0
  append(element: T): void{
    const listNode = new ListNode(element)
    if(!this.length) {
      this.head = listNode
    }else {
      let index = 0
      let current = this.head
      while(++index < this.length){
        current = current.next
      }
      current.next = listNode
    }
    this.length++
  }
  insert(position: number, data: T): boolean {
    if(position < 0 || position > this.length) return false
    if(position === this.length){
      this.append(data)
      return true
    }
    const newNode = new ListNode<T>(data)
    if(!position){
      const next = this.head
      this.head = newNode
      newNode.next = next
    }else{
      let current = this.head
      let index = 0
      while(++index < position){
        current = current.next
      }
      const next = current.next
      current.next = newNode
      newNode.next = next
    }
    this.length++
    return true
  }
  get(position: number): T {
    if(position < 0 || position >= this.length) return null
    let index = 0
    let current = this.head
    while(index++ < position){
      current = current.next
    }
    return current.data
  }
  indexOf(data: T){
    let current = this.head
    let index = 0
    while(current){
      if(current.data === data){
        return index
      }
      index++
      current = current.next
    }
    return -1
  }
  update(position: number, data: T){
    if(position < 0 || position >= this.length) return false
    let index = 0
    let current = this.head
    while(index++ < position){
      current = current.next
    }
    current.data = data
    return true
  }
  removeAt(position: number){
    if(position < 0 || position >= this.length) return false
    if(!position){
      const next = this.head.next
      this.head = next
    }else {
      let index = 0
      let current = this.head
      while(++index < position){
        current = current.next
      }
      const next = current.next.next
      current.next = next
    }
    this.length--
    return true
  }
  remove(data: T){
    return this.removeAt(this.indexOf(data))
  }
  size(){
    return this.length
  }
  isEmpty(){
    return this.length === 0
  }
  toString(): string{
    let res: T[] = []
    let current = this.head
    while(current){
      res.push(current.data)
      current = current.next
    }
    return res.join(', ')
  }
}
let ll = new LinkList<string>()
ll.append('0')
ll.append('1')
ll.append('2')
ll.update(0, '3')
ll.remove('1')
console.log(ll.toString())
