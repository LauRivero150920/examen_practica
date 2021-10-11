const db = require('../util/database');

module.exports = class Lugar {
    constructor(mi_nombre) {
        this.nombre = mi_nombre;
    }
    save() {
        return db.execute('INSERT INTO lugares (nombre) VALUES (?)',
            [this.nombre]);
    }
}