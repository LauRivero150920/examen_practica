const { fetchAll } = require('../models/lugar');
const Lugar = require('../models/lugar');


exports.addPlace = (request, response, next) => {
    response.render('add_place',  {
        titulo: "Agregar Lugar",
    });
};


exports.postPlace = (request, response, next) => {
    const lugar = new Lugar(request.body.nombre);
    lugar.save()
        .then(([rows, fieldData]) => {
            response.status(302).redirect('/park_incidents/list');
        })
        .catch(err => {
            console.log(err);
            response.status(302).redirect('/error');
        });
};

exports.getList = (request, response, next) => {
    Lugar.fetchAll(request.params.nombre)
        .then(([rows, fieldData]) => {
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