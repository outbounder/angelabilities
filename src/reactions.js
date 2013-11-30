var series = require("reactions").make.collectSeries
module.exports = function(angel) {
  angel.series = function(array, next){
    if(next)
      return series(array)(angel, next)
    return series(array)
  }
}