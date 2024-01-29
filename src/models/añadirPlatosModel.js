//tabla
const añadirPlatos= (sequelize,type)=> {
    return sequelize.define('añadirPlatos',{
        añadirPlatosId:{
            //primary key
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        //campos
        nombreAñadirPlatos : type.STRING(30),
        descripcionAñadirPlatos : type.STRING(150),
        precio: type.STRING(10),
        stock: type.INTEGER,
        estado: type.STRING(10),
            
    crearAñadirPlatos:{
        type: 'TIMESTAMP',
        defaultValue: type.literal('CURRENT_TYPESTAMP'),
        allowNull: false
    },
    actualizarAñadirPlatos:{
        type: 'TIMESTAMP',
        defaultValue: type.literal('CURRENT_TYPESTAMP'),
        allowNull: false
    }
},{
    timestamps:false
} )    
}

module.exports= añadirPlatos