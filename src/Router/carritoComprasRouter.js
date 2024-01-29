const express= require ('express');
const router= express.Router()

const {mostrar}= require('../controller/carritoComprasControler')

router.get('/carritoCompras', mostrar)

module.exports = router