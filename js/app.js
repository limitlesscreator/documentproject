let arr = [1,2,3,4,5,6,7,8,9,10]

let result = 0

arr.forEach(el => {
  if (el % 2 === 0){
    return
  }
  else {
    result += el
  }
})

console.log(result)
