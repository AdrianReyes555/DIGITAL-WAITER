const administador={}

    administador.mostrar= async(req, res)=>{
        res.render('administrador/administrador');
    }

    module.exports =administador