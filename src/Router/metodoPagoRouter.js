const express= require ('express');
const router= express.Router()

const {mostrar}= require('../controller/metodoPagoControler')

router.get('/metodoPago', mostrar)

module.exports = router