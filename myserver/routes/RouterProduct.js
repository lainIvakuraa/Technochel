const Router = require('express')
const router = new Router

router.post('/')
router.get('/')
router.get('/:id') // по идее, так можно получить конкретный девайс


module.exports = router