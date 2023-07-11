const router = require('express').Router()

router.get('/new', (req, res) => {
  res.render('places/new')
})

let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/ThaiDish.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/Cafe.jpg'
  }]
  

router.get('/', (req, res) => {
    
    res.render('places/index', { places })
})

 

module.exports = router

