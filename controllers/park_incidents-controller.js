const { fetchAll } = require('../models/incidente'); // Imortar el fetch all del modelo del modelo
const Incident = require('../models/incidente');
const { fetchPlaces } = require('../models/incidente');

exports.addIncident = (request, response, next) => {
    Incident.fetchPlaces()
        .then(([rows1, fieldData]) => {
            Incident.fetchTypes()
                .then(([rows2, fieldData]) => {
                    response.render('add_incidents',  {
                        titulo: "Agregar Incidente",
                        lista_lugares: rows1,
                        lista_tipos: rows2,
                    });
                })
                .catch(err => {
                    console.log(err);
                    response.status(302).redirect('/error');
                });
        })
        .catch(err => {
            console.log(err);
            response.status(302).redirect('/error');
        });
};

exports.getIncident = (request, response, next) => {
    Incident.fetchAll()
        .then(([rows, fieldData]) => {
            console.log(rows);
            response.render('incident_list',  {
                titulo: "Listado de Incidentes",
                lista_incidentes: rows,
            });
        })
        .catch(err => {
            console.log(err);
            response.status(302).redirect('/error');
        });
};

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