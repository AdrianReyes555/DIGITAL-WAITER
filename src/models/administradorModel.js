//tabla
const administrador= (sequelize,type)=> {
    return sequelize.define('administrador',{
        administradorId:{
            //primary key
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        //campos
        nombreAdministrador : type.STRING(50),
        nombres : type.STRING(50),
        apellidos : type.STRING(50),
        correo : type.STRING(50),
        contraseña : type.STRING(50),
        estado : type.STRING(10),

        crearAdministrador:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TYPESTAMP'),
            allowNull: false
        },
        actualizarAdministrador:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TYPESTAMP'),
            allowNull: false
        }
    },{
        timestamps:false
    } )    
}

module.exports= administrador
