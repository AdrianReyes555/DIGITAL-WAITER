const { Sequelize } = require("sequelize");
const { MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE, MYSQLPORT, MYSQL_URI } = require("../keys");

let sequelize;

// Usar URI de conexión si está disponible
if (MYSQL_URI) {
    sequelize = new Sequelize(MYSQL_URI);
} else {
    // Configuración para parámetros individuales
    sequelize = new Sequelize(MYSQLDATABASE, MYSQLUSER, MYSQLPASSWORD, {
        host: MYSQLHOST,
        port: MYSQLPORT,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 1,
            acquire: 30000,
            idle: 10000
        }
    });
}

// Autenticar y sincronizar
sequelize.authenticate()
    .then(() => {
        console.log("Conexión establecida con la base de datos");
    })
    .catch((err) => {
        console.error("No se pudo conectar a la base de datos:", err.message);
    });

sequelize.sync({ force: false })
    .then(() => {
        console.log("Tablas sincronizadas");
    })
    .catch((err) => {
        console.error("Error al sincronizar las tablas:", err.message);
    });


    //sincronia

    const administadorModel= require('../models/administradorModel')
    const añadirPlatosModel= require('../models/añadirPlatosModel')
    const carritoComprasModel= require('../models/carritoComprasModel')
    const categoriasModel= require('../models/categoriasModel')
    const menuModel=require('../models/menuModel')
    const metodoPagoModel= require('../models/metodoPagoModel')
    const restauranteModel= require('../models/restauranteModel')
    const subCategoriasModel= require('../models/subCategoriasModel');
    

    const administador= administadorModel(sequelize,Sequelize)
    const añadirPlatos= añadirPlatosModel(sequelize,Sequelize)
    const carritoCompras= carritoComprasModel(sequelize,Sequelize)
    const categorias= categoriasModel(sequelize,Sequelize)
    const menu= menuModel(sequelize,Sequelize)
    const metodoPago= metodoPagoModel(sequelize,Sequelize)
    const restaurante= restauranteModel(sequelize,Sequelize)
    const subCategorias= subCategoriasModel(sequelize,Sequelize)

    // relaciones

    administador.hasMany(restaurante)
    restaurante.belongsTo(administador)  

    restaurante.hasMany(menu)
    menu.belongsTo(restaurante)  

    menu.hasMany(categorias)
    categorias.belongsTo(menu)

    menu.hasMany(subCategorias)
    subCategorias.belongsTo(menu)

    subCategorias.hasMany(añadirPlatos)
    añadirPlatos.belongsTo(subCategorias)

    menu.hasMany(carritoCompras)
    carritoCompras.belongsTo(menu)

    carritoCompras.hasMany(metodoPago)
    metodoPago.belongsTo(carritoCompras)  
    

// Exportar el objeto sequelize
module.exports = sequelize;
