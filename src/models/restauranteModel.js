const restaurante= (sequelize,type)=> {
    return sequelize.define('restaurante',{
        restauranteId:{
            //primary key
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        //campos
        nombreRestaurante : type.STRING(50),
        descripcionRestaurante : type.STRING(250),
        estado : type.STRING(10),

        crearRestaurante:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TYPESTAMP'),
            allowNull: false
        },
        actualizarRestaurante:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TYPESTAMP'),
            allowNull: false
        }
    },{
        timestamps:false
    } )    
}

module.exports= restaurante
