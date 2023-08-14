const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db('cars')
}

const getById = (id) => {
  // DO YOUR MAGIC
  return db('cars').where({ id }).first()
}

const create = async (body) => {
  // DO YOUR MAGIC
  const [id] = await db('cars').insert(body)
  return getById(id)
}

module.exports = {
  getAll,
  getById,
  create
}
