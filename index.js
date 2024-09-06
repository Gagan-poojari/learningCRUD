const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//ROUTES
app.use('/api/products', productRoute)

app.get('/', function (req, res) {
  res.send('Hello Woooorld')
})


mongoose.connect('mongodb+srv://gagancgp:ieus5RxvKbQ9J7GQ@backenddb.ldsd5.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log("Connected to the database")
    app.listen(3000, () => {
      console.log('Listening on port 3000')
    })
  })
  .catch(() => {
    console.log("Connection failed")
  })  