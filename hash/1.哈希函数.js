function hashFunc(str, size){
  let hashCode = 0
  for(let i = 0; i < str.length; i++){
    hashCode = 37 * hashCode + str.charCodeAt(i)
  }
  let index = hashCode % size
  return index
}