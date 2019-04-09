/** import express  */
const express = require('express')
/** import path module */
const path = require('path') 

/** add express app */ 
const app = express()

/** set view directory path */
app.set('views', path.join(__dirname,'views'))
/** set mustache templating engine */
app.set('view engine', 'mustache')
app.engine('mustache', require('hogan-middleware').__express)

/** add routes */
app.get('/',(req, res, next) => {
    res.send("hello")
} )

app.get('/json',(req, res, next) => {
    const data = {
        greeting: 'Hello'
    }
    res.json(data)
})

app.get('/home',(req, res, next) => {
    res.render('home',null)
})

app.listen(3000)