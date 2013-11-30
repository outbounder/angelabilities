var exec = require("shellreactions-exec").exec
var ssh = require("shellreactions-exec").ssh

module.exports = function(angel){
  angel.exec = function(commands, next){
    if(next) 
      return exec(commands, angel, next)
    return exec(commands)
  }
  angel.ssh = function(remote, commands, next){
    if(next)
      return ssh(remote, commands, angel, next)
    return ssh(remote, commands)
  }
}