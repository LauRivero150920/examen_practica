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
        return db.execute('SELECT* FROM incidentes I, lugares L, tipos T WHERE I.lugar_incidente = L.id AND I.tipo_incidente = T.id ORDER BY fecha DESC')
    }
    
    static fetchPlaces(){
        return db.execute('SELECT nombre FROM lugares');
    }

    static fetchTypes(){
        return db.execute('SELECT descripcion FROM tipos');
    }
}