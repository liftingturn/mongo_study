const express = require('express')
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import routes from './routes';
import Book from './models/book'



const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const port = process.env.PORT || 8080

const db = mongoose.connection
db.on('error',console.error)
db.once('open',()=>{console.log('connected to mongod server')})

mongoose.connect('mongodb://localhost/mongodb_tutorial')

const router = routes(app,Book)

const server = app.listen(port,()=>{
    console.log('server listen port:',port)
})