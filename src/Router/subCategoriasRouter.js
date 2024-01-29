const express= require ('express');
const router= express.Router()

const {mostrar}= require('../controller/subCategoriasControler')

router.get('/subCategorias', mostrar)

module.exports = router