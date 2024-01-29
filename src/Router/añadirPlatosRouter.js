const express= require ('express');
const router= express.Router()

const {mostrar}= require('../controller/añadirPlatosControler')

router.get('/añadirPlatos', mostrar)

module.exports = router