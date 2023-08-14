// STRETCH
exports.seed = function(knex) {
  return knex('cars').truncate()
    .then(function () {
      return knex('cars').insert([
        { 
          vin: '11111111111111111',
          make: 'Ford',
          model: 'Focus',
          mileage: 50000,
          title: 'clean',
          transmission: 'automatic'
        },
        { 
          vin: '22222222222222222',
          make: 'Nissan',
          model: 'Altima',
          mileage: 10000,
          title: 'clean',
          transmission: 'manual'
        },
        { 
          vin: '33333333333333333',
          make: 'Subaru',
          model: 'Outback',
          mileage: 150000,
          title: 'salvage',
        },
      ])
    })
}