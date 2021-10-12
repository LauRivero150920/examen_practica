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

exports.postIncident = (request, response, next) => {
    const incidente = new Incident(request.body.created_at, request.body.lugares, request.body.tipos);
    incidente.save()
        .then(([rows, fieldData]) => {
            response.status(302).redirect('/park_incidents/list');
        })
        .catch(err => {
            console.log(err);
            response.status(302).redirect('/error');
        });
};