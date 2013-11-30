var exec = require("shellreactions-exec").exec
var ssh = require("shellreactions-exec").ssh

module.exports = function(angel){
  angel.exec = function(commands, next){
    if(next) 
      return exec(commands, this, next)
    return exec(commands)
  }
  angel.ssh = function(remote, commands, next){
    if(next)
      return ssh(remote, commands, this, next)
    return ssh(remote, commands)
  }
}