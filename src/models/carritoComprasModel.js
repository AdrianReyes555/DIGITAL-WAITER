const carritoCompras= (sequelize,type)=> {
    return sequelize.define('carritoCompras',{
        carritoComprasId:{
            //primary key
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        //campos
        fechaCarritoCompras: type.STRING(30),        

        crearCarritoCompras:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TYPESTAMP'),
            allowNull: false
        },
        actualizarCarritoCompras:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TYPESTAMP'),
            allowNull: false
        }
    },{
        timestamps:false
    } )    
}

module.exports= carritoCompras

