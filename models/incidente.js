const db = require('../util/database');

module.exports = class Incidente {
    constructor(created_at, mi_lugar, mi_tipo) {
        this.created_at = created_at;
        this.lugar = mi_lugar;
        this.tipo = mi_tipo;
    }
    save() {
        return db.execute('INSERT INTO incidentes (lugar_incidente, tipo_incidente) VALUES (?, ?)',
            [this.lugar, this.tipo]);
    }
    static fetchAll() {
        return db.execute('SELECT I.created_at, L.nombre, T.descripcion FROM incidentes I, lugares L, tipos T WHERE I.lugar_incidente = L.id AND I.tipo_incidente = T.id ORDER BY I.created_at DESC')
    }
    
    static fetchPlaces(){
        return db.execute('SELECT * FROM lugares ORDER BY nombre ASC');
    }

    static fetchTypes(){
        return db.execute('SELECT * FROM tipos ORDER BY descripcion ASC');
    }
}