const { fetchAll } = require('../models/incidente'); // Imortar el fetch all del modelo del modelo
const Incident = require('../models/incidente');

// Método de conslta
/*
exports.getList = (request, response, next) => {
    //* Fetch all de modelo platillo, recuperar todos los platillos
    Platillo.fetchAll(request.params.platillo_id)
        .then(([rows, fieldData]) => {
            // console.log(rows);
            response.render('lista_menu',  {
                titulo: "Menú",
                isLoggedIn: request.session.isLoggedIn,
                username: request.session.username,
                lista_platillos: rows,
            });
        })
        .catch(err => {
            console.log(err);
            response.status(302).redirect('/error');
        });
};
*/
exports.addIncident = (request, response, next) => {
    response.render('add_incidents',  {
        titulo: "Agregar Incidente",
    });
};

exports.getIncident = (request, response, next) => {
    response.render('incident_list',  {
        titulo: "Listado de Incidentes",
    });
};


// Método de inserción
exports.getAdd = (request, response, next) => {
    if (!request.session.isLoggedIn) {
        return response.redirect('/users/login');
    }
    //Resto del código de la ruta...
    response.render('add_menu',{
        titulo: "Agregar Platillo al Menú",
        isLoggedIn: request.session.isLoggedIn,
        username: request.session.username,
    });
};

// Método de inserción
exports.postAdd = (request, response, next) => {
    response.setHeader('Set-Cookie', 'ultimo_platillo='+request.body.nombre+ ';HttpOnly');
    const lugar = new Platillo(request.body.nombre, request.body.descripcion, request.body.imagen);
    platillo.save()
        .then(([rows, fieldData]) => {
            response.status(302).redirect('/menu/list');
        })
        .catch(err => {
            console.log(err);
            response.status(302).redirect('/error');
        });
};