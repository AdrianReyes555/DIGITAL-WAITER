//tabla
const subCategorias = (sequelize,type)=> {
    return sequelize.define('subCategorias',{
       subCategoriasId:{
            //primary key
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        //campos
        nombreSubCategorias : type.STRING(30),
        descripcionSubCategorias : type.STRING(150),
        estado: type.STRING(10),
            
    crearSubCategorias:{
        type: 'TIMESTAMP',
        defaultValue: type.literal('CURRENT_TYPESTAMP'),
        allowNull: false
    },
    actualizarSubCategorias:{
        type: 'TIMESTAMP',
        defaultValue: type.literal('CURRENT_TYPESTAMP'),
        allowNull: false
    }
},{
    timestamps:false
} )    
}

module.exports= subCategorias