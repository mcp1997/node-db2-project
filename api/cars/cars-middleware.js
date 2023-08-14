const Car = require('./cars-model')
const db = require('../../data/db-config')
const vinValidator = require('vin-validator')

const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
  const id = req.params.id
  Car.getById(id)
    .then(car => {
      if(!car) {
        res.status(404).json({
          message: `car with id ${id} is not found`
        })
      } else {
        req.car = car
        next()
      }
    })
    .catch(next)
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin, make, model, mileage } = req.body
  if(!vin) return next({
    status: 400,
    message: 'vin is missing',
  })
  if(!make) return next({
    status: 400,
    message: 'make is missing',
  })
  if(!model) return next({
    status: 400,
    message: 'model is missing',
  })
  if(!mileage) return next({
    status: 400,
    message: 'mileage is missing',
  })
  next()
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const vin = req.body.vin
  if(vinValidator.validate(vin)) {
    next()
  } else {
    next({
      status: 400,
      message: `vin ${vin} is invalid`
    })
  }
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
  const vin = req.body.vin
  db('cars').where({ vin: vin.trim() }).first()
    .then(existing => {
      if(existing) {
        next({
          status: 400,
          message: `vin ${vin} already exists`
        })
      } else {
        next()
      }
    })
    .catch(next)
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
