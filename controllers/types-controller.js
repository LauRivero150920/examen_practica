const { fetchAll } = require('../models/tipo');
const Tipo = require('../models/tipo');


exports.addType = (request, response, next) => {
    response.render('add_type',  {
        titulo: "Agregar Tipo de Incidente",
    });
};


exports.postType = (request, response, next) => {
    const tipo = new Tipo(request.body.descripcion);
    tipo.save()
        .then(([rows, fieldData]) => {
            response.status(302).redirect('/park_incidents/list');
        })
        .catch(err => {
            console.log(err);
            response.status(302).redirect('/error');
        });
};