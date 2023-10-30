const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.port || 5000

const reviewrestaurants = require('./data/restaurants.json')
const foods = require('./data/foods.json')
 app.use(cors())


app.get('/', (req, res) => {
    res.send('API runing')
  })

  app.get('/food-restaurants' , (req , res ) => {
    res.send(reviewrestaurants)
  })

  app.get('/foods/:id' , (req , res) => {
    const id =req.params.id 
    const foodsid = foods.find( food => food._id === id)
    res.send(foodsid)
  })
  
  app.listen(port, () => {
    console.log('Example app listening on port ',port)
  })