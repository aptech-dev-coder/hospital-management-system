import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import {addNewSnack,deleteSnack,getSingleSnack,getSnack,updateSnack} from './controllers/snack.controller.js'
dotenv.config()
const app = express()

app.use(express.json()) // req body == json()
app.use(express.urlencoded()) // req.body == form
app.set('view engine', 'ejs') // views
app.use(express.static('public')) // static

app.get('/',getSnack)
app.get('/:snackId',getSingleSnack)
app.post('/',addNewSnack)
app.put('/:id',updateSnack)
app.delete('/:id',deleteSnack)
// app.get('/snacks', getSnack)


app.get('/getAllsnaks',getAllsnaks)



app.listen(process.env.PORT,()=>{
    console.log('running')
})// server run
mongoose.connect(process.env.MONGODB_CONNECTION).then(
    console.log('connected to db')
).catch((er)=>{
    console.log(er)
})
// mongodb connection