var format = require('string-template')
module.exports = function(angel) {
  angel.format = function(value) {
    return format(value, this.cmdData)
  }
}