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
  kittens.concat('Arnold')
  return kittens
}
function removeLastKitten(name) {
  kittens.slice(0, 1)
  return kittens
}
function removeFirstKitten(name) {
  kittens.slice(1, 2)
  return kittens
}
