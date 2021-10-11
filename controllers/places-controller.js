const { fetchAll } = require('../models/lugar'); // Imortar el fetch all del modelo del modelo
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