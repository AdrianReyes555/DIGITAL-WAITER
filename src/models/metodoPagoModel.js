const metodoPago= (sequelize,type)=> {
    return sequelize.define('metodoPago',{
        restauranteId:{
            //primary key
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        //campos
        nombreMetodoPago : type.STRING(50),
        descripcionMetodoPago : type.STRING(250),
        estado : type.STRING(10),

        crearMetodoPago:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TYPESTAMP'),
            allowNull: false
        },
        actualizarMetodoPago:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TYPESTAMP'),
            allowNull: false
        }
    },{
        timestamps:false
    } )    
}

module.exports= metodoPago
