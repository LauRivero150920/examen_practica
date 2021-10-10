const db = require('../util/database');

module.exports = class generico {
    //* Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_atributo1, mi_atributo2, mi_atributo3) {
        this.atributo1 = mi_atributo1;
        this.atributo2 = mi_atributo2;
        this.atributo3 = mi_atributo3;
    }

    //* Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO data_base (nombre, descripcion, imagen) VALUES (?, ?, ?)',
            [this.nombre, this.descripcion, this.imagen]);
    }

    // Este método servirá para devolver los objetos del almacenamiento persistente.
    // Métodos estáticos utilizados para las consultas, no necesitan ser llamados a través de un objeto de la clase
    static fetchAll(id) {
        if(id === undefined){
            return db.execute('SELECT * FROM data_base ORDER BY nombre ASC');
        }
        else{
            return db.execute('SELECT * FROM data_base WHERE id = ?', [id]);
        }
    }
}