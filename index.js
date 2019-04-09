/** import express  */
const express = require('express')

/** add express app */ 
const app = express()

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

app.listen(3000)