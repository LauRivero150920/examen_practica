const db = require('../util/database');

module.exports = class Incidente {
    constructor(mi_hora, mi_fecha, mi_lugar, mi_tipo) {
        this.hora = mi_hora;
        this.fecha = mi_fecha;
        this.lugar = mi_lugar;
        this.tipo = mi_tipo;
    }
    save() {
        return db.execute('INSERT INTO incidentes (hora, fecha, lugar_incidente, tipo_incidente) VALUES (?, ?, ?, ?)',
            [this.hora, this.fecha, this.lugar, this.tipo]);
    }
    static fetchAll() {
        return db.execute('SELECT* FROM incidentes I, lugares L, tipos T WHERE I.lugar_incidente = L.id AND I.tipo_incidente = T.id ORDER BY fecha DESC')
    }
    
    static fetchPlaces(){
        return db.execute('SELECT * FROM lugares ORDER BY nombre ASC');
    }

    static fetchTypes(){
        return db.execute('SELECT * FROM tipos ORDER BY descripcion ASC');
    }
}