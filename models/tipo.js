const db = require('../util/database');

module.exports = class Tipo {
    constructor(descripcion) {
        this.descripcion = descripcion;
    }
    save() {
        return db.execute('INSERT INTO tipos (descripcion) VALUES (?)',
            [this.descripcion]);
    }
}