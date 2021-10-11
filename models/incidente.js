const db = require('../util/database');

module.exports = class Incidente {
    constructor(mi_nombre) {
        this.nombre = mi_nombre;
    }
    save() {
        return db.execute('INSERT INTO lugares (nombre) VALUES (?)',
            [this.nombre]);
    }
    /*
    static fetchAll(id) {
        if(id === undefined){
            return db.execute('SELECT * FROM data_base ORDER BY nombre ASC');
        }
        else{
            return db.execute('SELECT * FROM data_base WHERE id = ?', [id]);
        }
    }*/
}