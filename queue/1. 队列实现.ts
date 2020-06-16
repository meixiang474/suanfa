export default class Queue<T> {
  // 属性
  items: T[] = []
  enqueue(item: T): void {
    this.items.push(item)
  }
  dequeue(): T {
    return this.items.shift()
  }
  front(): T {
    return this.items[0]
  }
  size(): number {
    return this.items.length
  }
  isEmpty(): boolean {
    return this.items.length === 0
  }
  toString(): string {
    return this.items.toString()
  }
}
