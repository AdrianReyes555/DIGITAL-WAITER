//tabla
const categorias= (sequelize,type)=> {
    return sequelize.define('categorias',{
       categoriasId:{
            //primary key
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        //campos
        nombreCategorias : type.STRING(30),
        descripcionCategorias : type.STRING(150),
        estado: type.STRING(10),
            
    crearCategorias:{
        type: 'TIMESTAMP',
        defaultValue: type.literal('CURRENT_TYPESTAMP'),
        allowNull: false
    },
    actualizarCategorias:{
        type: 'TIMESTAMP',
        defaultValue: type.literal('CURRENT_TYPESTAMP'),
        allowNull: false
    }
},{
    timestamps:false
} )    
}

module.exports= categorias