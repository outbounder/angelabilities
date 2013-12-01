# angelabilities

A collection of angel abilities.

## io

When used `angel.output` and `angel.input` will be references to `process.stdout` and `process.stdin`

## shell

Helper methods wrapper of `shellreactions-exec`. 
All commands support `{placeholder}` replacement which uses for data `angel.cmdData`

### angel.exec(commands [, next])

* `commands` : String or Array of commands.
* `next` : optional `function(err, result)`, if not present an reaction `function(angel, next)` will be returned.

<br />

    angel.cmdData.value = "test"

    // with next
    angel.exec("echo {value}", function(err, result){
      // result == "test"
    })

    // without next
    var fn = angel.exec("echo {value}")
    fn(angel, function(err, result){
      // result == "test"
    })

### angel.ssh(remote, commands [, next])

* `remote` : String. Its value will be used to get the corresponding `angel.cmdData[remote]` value for ssh connection be made
* `commands` : String or Array of commands.
* `next` : optional `function(err, result)`, if not present an reaction `function(angel, next)` will be returned.

<br />

    angel.cmdData.value = "test"
    angel.cmdData.remoteA = "production"
    angel.cmdData.remoteB = "production2"

    // with next
    angel.ssh("remoteA", "echo {value}", function(err, result){
      // result == "test"
    })

    // without next
    var fn = angel.ssh("remoteB", "echo {value}")
    fn(angel, function(err, result){
      // result == "test"
    })

## reactions

Helper methods wrapper of `reactions`. 

### angel.series(fnArray [, next]) 

* `fnArray` : Array of `function(angel, next)` to be executed in series
* `next` : optional, `function(err, result)`, if not present an reaction `function(angel, next)` will be returned. Note that `result` will be an Array  all `fnArray` results.

<br />

    var reaction = [
      function(angel, next) {
        next(null, "test")
      },
      function(angel, next) {
        next(null, "test2")
      }
    ]

    // with next
    angel.series(reaction, function(err, result){
      // result[0] == "test", result[1] == "test2"
    })

    // without next
    var fn = angel.series(reaction)
    fn(angel, function(err, result){
      // result[0] == "test", result[1] == "test2"
    })

# Thanks to

## reactions
https://github.com/vbogdanov/reactions

## underscore 
http://underscorejs.org

## shellreactions-exec
https://github.com/outbounder/shellreactions-exec

## organic-angel
https://github.com/outbounder/organic-angel

## jasmine-node
https://github.com/mhevery/jasmine-node