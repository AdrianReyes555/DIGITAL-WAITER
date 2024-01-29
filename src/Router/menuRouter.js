const express= require ('express');
const router= express.Router()

const {mostrar}= require('../controller/menuControler')

router.get('/menu', mostrar)

module.exports = router