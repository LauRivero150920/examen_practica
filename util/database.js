const mysql = require('mysql2');

const BD = "DEV";

let host = '';
let user = '';
let database = '';
let password = '';

//* Fase de development (desarrollo)
if(BD ===  "DEV"){
    host = 'localhost';
    user = 'root';
    database = 'jurassic_park';
    password = '';
}

else if(BD === "PROD"){
    host = 'localhost';
    user = 'root';
    database = 'jurassic_park';
    password = 'fewfednvjerwf243dkmsjvf4_#_#nrehufiwodjskc12342jnfwejdioskmncdj';
}

const pool = mysql.createPool({
    host: host,
    user: user,
    database: database,
    password: password,
});

module.exports = pool.promise();