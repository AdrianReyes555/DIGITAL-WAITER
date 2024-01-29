//tabla
const menu= (sequelize,type)=> {
    return sequelize.define('menu',{
        menuId:{
            //primary key
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        //campos
        nombreMenu : type.STRING(30),
        descripcionMenu : type.STRING(150),
        estado: type.STRING(10),
            
    crearMenu:{
        type: 'TIMESTAMP',
        defaultValue: type.literal('CURRENT_TYPESTAMP'),
        allowNull: false
    },
    actualizarMenu:{
        type: 'TIMESTAMP',
        defaultValue: type.literal('CURRENT_TYPESTAMP'),
        allowNull: false
    }
},{
    timestamps:false
} )    
}

module.exports= menu