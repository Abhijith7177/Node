const http = require('http')
const express =require('express')

const app = express()

app.use((req,res,next) => {
    console.log('middleware')
    res.send('ello there')
    next()
})
app.use((req,res,next) => {
    console.log('second middleware')
})
const server = http.createServer(app)

server.listen(7000)