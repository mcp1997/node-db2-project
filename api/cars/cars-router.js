// DO YOUR MAGIC
const express = require('express')
const Car = require('./cars-model')
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
} = require('./cars-middleware')

const router = express.Router()

router.get('/', (req, res, next) => {
  Car.getAll()
    .then(cars => {
      res.json(cars)
    })
    .catch(next)
})

router.get('/:id', checkCarId, (req, res) => {
  res.json(req.car)
})

router.post('/', (req, res, next) => {
  res.send('post new car')
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    customMessage: 'something went wrong inside of the cars router',
    message: err.message,
    stack: err.stack
  })
})

module.exports = router