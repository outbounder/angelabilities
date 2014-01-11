var format = require('string-template')

module.exports = function(angel) {
  angel.output = process.stdout
  angel.log = function(){
    for(var i = 0; i<arguments.length; i++)
      arguments[i] = format(arguments[i], this.cmdData)
    console.log.apply(console, arguments)
  }
  angel.stdin = function(fn) {
    return function(angel, next) {
      angel.input = process.stdin
      fn(angel, next)
    }
  }
}