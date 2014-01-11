var ncp = require("ncp")
var temporary = require("temporary")
module.exports = function(angel) {
  angel.fs = {
    cp : function(src, dest, ignoreList){
      return function(angel, next) {
        ncp(angel.cmdData[src], angel.cmdData[dest], {
          filter: function(file){
            for(var i = 0; i<ignoreList.length; i++)
              if(file.indexOf(ignoreList[i]) != -1)
                return false
            return true
          }
        }, next)
      }
    },
    chdir : function(path) {
      return function(angel, next){
        angel.cmdOptions = {
          cwd: angel.cmdData[path]
        }
        next()
      }
    },
    tempfolder : function(){
      var dir = new temporary.Dir()
      return dir.path
    }
  }
}