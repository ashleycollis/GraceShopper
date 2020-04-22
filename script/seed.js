'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const {Clothes} = require('../server/db/models')
const {Orders} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      fName: 'Cody',
      lName: 'thePug',
      address: '1000 fullstack ave',
      email: 'cody@email.com',
      password: '123'
    }),
    User.create({
      fName: 'CodyBreo',
      lName: 'theBull',
      address: '150 fullstack ave',
      email: 'murphy@email.com',
      password: '123'
    })
  ])

  const clothes = await Promise.all([
    Clothes.create({
      name: 'Pink Passion',
      category: 'Dress',
      price: 400,
      size: 4,
      inventory: 1000,
      imageUrl:
        'https://images.neimanmarcus.com/ca/2/product_assets/T/Y/A/2/2/NMTYA22_mz.jpg'
    }),
    Clothes.create({
      name: 'Corporate Blue',
      category: 'Dress',
      price: 1500,
      size: 4,
      inventory: 1000,
      imageUrl:
        'https://i.pinimg.com/564x/ed/75/8b/ed758bf72433c2a316a5f40bdb720352.jpg'
    }),
    Clothes.create({
      name: 'Gucci Cuff Gown ',
      category: 'Shirts',
      price: 8000,
      size: 2,
      inventory: 1000,
      imageUrl:
        'https://images.neimanmarcus.com/ca/1/product_assets/B/5/D/A/D/NMB5DAD_mz.jpg'
    }),
    Clothes.create({
      name: 'Shimmery Gown',
      category: 'Dress',
      price: 400.0,
      size: 4,
      inventory: 1000,
      imageUrl:
        'https://images.neimanmarcus.com/ca/1/product_assets/B/5/8/Y/A/NMB58YA_mz.jpg'
    }),
    Clothes.create({
      name: 'Busy Bombshell',
      category: 'Dress',
      price: 300.0,
      size: 4,
      inventory: 1000,
      imageUrl:
        'https://images.neimanmarcus.com/ca/4/product_assets/T/Y/A/S/8/NMTYAS8_mz.jpg'
    }),
    Clothes.create({
      name: 'Altuzarra Shimmery',
      category: 'Dress',
      price: 3950.0,
      size: 4,
      inventory: 1000,
      imageUrl:
        'https://images.neimanmarcus.com/ca/5/product_assets/B/4/U/V/C/NMB4UVC_bz.jpg'
    }),
    Clothes.create({
      name: 'Peacock Gown',
      category: 'Dress',
      price: 5000,
      size: 2,
      inventory: 200,
      imageUrl:
        'https://images.neimanmarcus.com/ca/1/product_assets/T/Z/E/5/3/NMTZE53_mz.jpg'
    }),
    Clothes.create({
      name: 'Diamond Jumper',
      category: 'Dress',
      price: 1000,
      size: 2,
      inventory: 100,
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0092/1472/2106/products/Silver-Nude-V-Neck-Jumpsuit-Luxury-Evening-Dresses-2019-Sleeveless-Sequined-Sexy-Evening-Gowns-Serene-Hill_800x.jpg?v=1572010762'
    }),

    Clothes.create({
      name: 'Magnificent Midnight',
      category: 'dress',
      price: 900.0,
      size: 2,
      inventory: 100,
      imageUrl:
        'https://www.neimanmarcus.com/product_assets/T/0/9/6/F/NMT096F_mk.jpg'
    })
  ])

  const orders = await Promise.all([
    Orders.create({
      date: new Date('August 20, 1975 23:15:30'),
      amount: 1.0
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${clothes.length} clothes`)
  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
