const express= require ('express');
const router= express.Router()

const {mostrar}= require('../controller/restauranteControler')

router.get('/restaurante', mostrar)

module.exports = router