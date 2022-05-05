const eventEmmitter = require('events')

const customEmitter = new eventEmmitter()

//first we listen to an event (on) second we emit it

customEmitter.on('response', (name, id)=>{
    console.log('data received ' + name +" "+ id)
})

customEmitter.on('response', ()=>{
    console.log('some other logic')
})


customEmitter.emit('response', 'Yotam', 36)


