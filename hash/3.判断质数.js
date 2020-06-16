function isPrime (num){
  for(let i = 2; i< num; i++){
    if(num % i === 0){
      return false
    }
  }
  return true
}

function isPrime1(num) {
  let temp = parseInt(Math.sqrt(num))
  for(let i = 0; i <= temp; i++){
    if(num % i === 0){
      return false
    } 
  }
  return true
}