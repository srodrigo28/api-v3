const Sequelize = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: process.env.DIALECT,
    ssl: {
        ca: process.env.PRIVATE_KEY
    }
});

/**  Verifica conexão
console.log("Chave1 \n" + key1)

sequelize.authenticate()
.then(function(){
    console.log('sucesso')
})
.catch(function(){
    console.log('error')
});
*/

module.exports = sequelize;