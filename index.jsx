const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.port || 5000

require('dotenv').config()

app.use(cors())
app.use(express.json())



const reviewrestaurants = require('./data/restaurants.json')
const foods = require('./data/foods.json')
const servises = require ('./data/Servises.json')
 const checout = require('./data/Checout.json')

app.get('/', (req, res) => {
    res.send('API runing')
  })

  app.get('/food-restaurants' , (req , res ) => {
    res.send(reviewrestaurants)
  })
  app.get('/servises', (req, res) => {
    res.send(servises)
  })
  app.get('/foods/:id' , (req , res) => {
    const id =req.params.id 
    const foodsid = foods.find( food => food._id === id)
    res.send(foodsid)
  })
 app.get('/checout/:id', (req, res) => {
  const id =req.params.id
  const ChecoutId=checout.find( checkid => checkid._id === id)
  res.send(ChecoutId) 
 })
  

  




  

  app.get('/items' , (req , res) => {
    res.send(items)
  })
  
  app.listen(port, () => {
    console.log('Example app listening on port ',port)
  })