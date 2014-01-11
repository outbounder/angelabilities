var series = require("reactions").make.collectSeries
module.exports = function(angel) {
  angel.series = function(array, next){
    if(next)
      return series(array)(this, next)
    return series(array)
  }
  angel.series.wrap = function() {
    var args = Array.prototype.slice.call(arguments, 0)
    var fn = args.shift()
    return function(angel, next) {
      args.push(next)
      fn.apply(angel, args)
    }
  }
}