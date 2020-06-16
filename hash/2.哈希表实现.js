class HashTable {
  storage = []
  count = 0
  limit = 7
  hashFunc(str, size){
    let hashCode = 0
    for(let i = 0; i < str.length; i++){
      hashCode = 37 * hashCode + str.charCodeAt(i)
    }
    let index = hashCode % size
    return index
  }
  // 添加和修改
  put(key, value){
    let index = this.hashFunc(key, this.limit)
    const bucket = this.storage[index]
    if(!bucket){
      bucket = []
      this.storage[index] = bucket
    }
    for(let i = 0; i < bucket.length; i++){
      let tuple = bucket[i]
      if(tuple[0] === key){
        tuple[1] = value
        return 
      }
    }
    bucket.push([key, value])
    this.count++
    if(this.count > this.limitt * 0.75){ 
      let newSize = this.limit * 2
      let newPrime = this.getPrime(newSize)
      this.resize(newPrime)
    }
  }
  // 获取
  get(key){
    let index = this.hashFunc(key, this.limit)
    let bucket = this.storage[index]
    if(!bucket) return null
    for(let i = 0; i < bucket.length; i++){
      let tuple = bucket[i]
      if(tuple[0] === key){
        return tuple[1]
      }
    }
    return null
  }
  // 删除
  remove(key){
    let index = this.hashFunc(key, this.limit)
    let bucket = this.storage[index]
    if(!bucket) return null
    for(let i = 0; i < bucket.length; i++){
      let tuple = bucket[i]
      if(tuple[0] === key){
        bucket.splice(i, 1)
        this.count--
        if(this.limit > 7 && this.count < this.limit * 0.25){
          let newPrime = this.getPrime(Math.floor(this.limit / 2))
          this.resize(newPrime)
        }
        return tuple[1]
      }
    }
    return null
  }
  isEmpty(){
    return this.count === 0
  }
  size(){
    return this.count
  }
  resize(newLimit){
    let oldStorage = this.storage
    this.storage = []
    this.count = 0
    this.limit = newLimit
    for(let i = 0; i < oldStorage.length; i++){
      let bucket = oldStorage[i]
      if(!bucket){
        continue
      }
      for(let j = 0; j < bucket.length; j++){
        let tuple = bucket[j]
        this.put(tuple[0], tuple[i])
      }
    }
  }
  isPrime(num){
    let temp = parseInt(Math.sqrt(num))
    for(let i = 0; i <= temp; i++){
      if(num % i === 0){
        return false
      } 
    }
    return true
  }
  // 获取质数
  getPrime(num){
    while(!this.isPrime(num)){
      num++
    }
    return num
  }
}