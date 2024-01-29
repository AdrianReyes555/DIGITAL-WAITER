const restaurante={}

    restaurante.mostrar= async(req, res)=>{
        res.render('restaurante/restaurante');
    }

    module.exports =restaurante