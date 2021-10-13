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
            response.status(302).redirect('/park_incidents/add');
        })
        .catch(err => {
            console.log(err);
            response.status(302).redirect('/error');
        });
};