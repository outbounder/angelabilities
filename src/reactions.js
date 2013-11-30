var series = require("reactions").make.collectSeries
module.exports = function(angel) {
  angel.series = function(array, next){
    if(next)
      return series(array)(this, next)
    return series(array)
  }
}