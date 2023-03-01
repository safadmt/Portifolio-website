const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')

const indexRouter = require('./router/index');

const app = express();
const db = 'mongodb+srv://safadmt:QwJPwnC8sPH5WGVc@cluster0.9ekwixw.mongodb.net/personal_website?retryWrites=true&w=majority'
mongoose.set('strictQuery', false)
mongoose.connect(db, err=> err ? console.log(err) : console.log('Database connected'));

app.use(express.static('public'));
app.use('/uploads/:file', express.static('/uploads'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
})


app.use('/', indexRouter);

app.listen(5000, err=> err ? console.log(err) : console.log('Server connected to port 5000'))