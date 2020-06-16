class Set {
  items = {}
  add(value){
    if(this.has(value)) return false
    this.items[value] = value
    return true
  }
  has(value){
    return this.items.hasOwnProperty(value)
  }
  remove(value){
    if(!this.has(value)) return false
    delete this.items[value]
    return true
  }
  clear(){
    this.items = {}
  }
  size(){
    return Object.keys(this.items).length
  }
  values(){
    return Object.values(this.items)
  }
  union(otherSet){
    const unionSet = new Set()
    const values = this.values()
    for(let i = 0; i < values.length; i++){
      unionSet.add(values[i])
    }
    values = otherSet.values()
    for(let i = 0; i < values.length; i++){
      unionSet.add(values[i])
    }
    return unionSet
  }
  intersection(otherSet){
    const intersection = new Set()
    const values = this.values()
    for(let i = 0; i < values.length; i++){
      if(otherSet.has(values[i])){
        intersection.add(values[i])
      }
    }
    return intersection
  }
  difference(otherSet){
    const newSet = new Set()
    const values = this.values()
    for(let i = 0; i < values.length; i++){
      if(!otherSet.has(values[i])){
        newSet.add(values[i])
      }
    }
    return newSet
  }
  subset(otherSet){
    const values = this.values()
    for(let i = 0; i < values.length; i++){
      if(!otherSet.has(values[i])) return false
    }
    return true
  }
}
const s = new Set()
s.add(1)
console.log(typeof s.values()[0])