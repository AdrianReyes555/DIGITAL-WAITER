const express= require ('express');
const router= express.Router()

const {mostrar}= require('../controller/administradorControler')

router.get('/administrador', mostrar)

module.exports = router