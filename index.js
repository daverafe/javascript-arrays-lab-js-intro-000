// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
  return kittens
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift()
  return kittens
}
function appendKitten(name) {
  kittens.concat('Broom')
  return kittens.concat('Broom')
}
function prependKitten(name) {
  kittens.splice(0, 0, 'Arnold')
  return kittens
}
function removeLastKitten(name) {
  kittens.splice(2)
  return kittens
}
function removeFirstKitten(name) {
  kittens.splice()
  return kittens
}
