const Car = require('./cars-model')

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
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
