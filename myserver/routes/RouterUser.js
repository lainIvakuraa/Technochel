const Router = require('express')
const router = new Router()
const ControllerUser = require('../controller/ControllerUser')

router.post('/registration', ControllerUser.registration)
router.post('/login', ControllerUser.login)
router.get('/:id', ControllerUser.checkUser)

module.exports = router