const express = require('express')
const app = express()
const port = process.env.port || 5000

const reviewrestaurants = require('./data/food.json')

app.get('/', (req, res) => {
    res.send('API runing')
  })

  app.get('/food-restaurants' , (req , res ) => {
    res.send(reviewrestaurants)
  })
  
  app.listen(port, () => {
    console.log('Example app listening on port ',port)
  })