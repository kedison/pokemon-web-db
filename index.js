const express = require('express')
var bodyParser = require('body-parser')
// mongoose implementation
const mongoose = require('mongoose');
const app = express()
const port = process.env.PORT || 3000

// middlewares
app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// data connection
// mongodb://pokemondb:<password>@cluster0-shard-00-00-gpfrf.mongodb.net:27017,cluster0-shard-00-01-gpfrf.mongodb.net:27017,cluster0-shard-00-02-gpfrf.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority
let uri = "mongodb://pokemondb:pokemondb1234@cluster0-shard-00-00-gpfrf.mongodb.net:27017,cluster0-shard-00-01-gpfrf.mongodb.net:27017,cluster0-shard-00-02-gpfrf.mongodb.net:27017/pokdemondb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// modules
const homev = require ('./routes/home')
const aboutv = require ('./routes/about')
const adminIndexv = require ('./routes/admin/index')
const adminCreatev = require ('./routes/admin/create')
const adminCreatePostv = require ('./routes/admin/createPost')
const adminUpdatev = require ('./routes/admin/update')
const adminUpdatePostv = require ('./routes/admin/updatePost')
const adminDeletev = require ('./routes/admin/delete')


app.get('/', homev)
app.get('/about', aboutv)
app.get('/admin/index', adminIndexv)
app.get('/admin/create', adminCreatev)
app.post('/admin/create', adminCreatePostv)
app.get('/admin/update/:id', adminUpdatev)
app.post('/admin/update', adminUpdatePostv)
app.get('/admin/delete/:id', adminDeletev)


app.listen(port, () => console.log(`Pokemon database is running on port ${port}!`))