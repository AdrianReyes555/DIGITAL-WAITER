const express= require ('express');
const router= express.Router()

const {mostrar}= require('../controller/categoriasControler')

router.get('/categorias', mostrar)

module.exports = router