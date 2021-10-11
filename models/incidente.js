const db = require('../util/database');

module.exports = class Incidente {
    constructor(mi_nombre) {
        this.nombre = mi_nombre;
    }
    save() {
        return db.execute('INSERT INTO incidentes (nombre) VALUES (?)',
            [this.nombre]);
    }
    static fetchAll() {
        let places = db.execute('SELECT nombre FROM lugares');
        let types = db.execute('SELECT descripcion FROM tipos');
        return [places, types];
    }
    
    static fetchPlaces(){
        return db.execute('SELECT nombre FROM lugares');
    }

    static fetchTypes(){
        return db.execute('SELECT descripcion FROM tipos');
    }
}