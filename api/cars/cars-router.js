// DO YOUR MAGIC
const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
  res.send('get cars')
})

router.get('/:id', (req, res) => {
  res.send('get car by ID')
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