class Stack<T> {
  private items: T[] = []
  // 1. 将元素压入到栈
  push(item: T): void {
    this.items.push(item)
  }

  // 2. 从栈中去除元素
  pop(): T {
    return this.items.pop()
  }

  // 3. 查看栈顶元素
  peek(): T {
    return this.items[this.items.length - 1]
  }

  // 4. 查看栈中元素的个数
  size(): number {
    return this.items.length
  }

  // 5. 判断栈是否为空
  isEmpty(): boolean {
    return this.items.length === 0
  }

  // 6. toString方法
  toString(): string {
    return this.items.toString()
  }
}

export default Stack