const increase = function (num) {
  return ++num
}

const decrease = function (num) {
  return --num
}

const predicates = { increase, decrease }

function makeCounter(predicate) {
  console.log('predicate', predicate)
  let num = 0

  return function () {
    num = predicate(num)
    return num
  }
}

const increaser = makeCounter(predicates.increase)
console.log('increaser', increaser)

console.log(increaser())
console.log(increaser())

console.log('hello world')
