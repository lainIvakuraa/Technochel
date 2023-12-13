// здесь храним все пути
// будет разбивка на отдельные пути

const Router = require('express')
const router = new Router
const RouterBrand = require('./RouterBrand')
const RouterType = require('./RouterType')
const RouterUser = require('./RouterUser')
const RouterProduct = require('./RouterProduct')


router.use('/user', RouterUser) // далее будут использоваться пути типа /api/user/usermethods
router.use('/type', RouterType)
router.use('/brand', RouterBrand)
router.use('/product', RouterProduct)

module.exports = router