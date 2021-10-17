const { fetchAll } = require('../models/incidente'); // Imortar el fetch all del modelo del modelo
const Incident = require('../models/incidente');
const { fetchPlaces } = require('../models/incidente');

exports.addIncident = (request, response, next) => {
    Incident.fetchPlaces()
        .then(([rows1, fieldData]) => {
            Incident.fetchTypes()
                .then(([rows2, fieldData]) => {
                    response.render('add_incidents',  {
                        titulo_1: "Agregar Incidente",
                        titulo_2: "Listado de Incidentes",
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
            /*response.render('incident_list',  {
                titulo_2: "Listado de Incidentes",
                lista_incidentes: rows,
            });*/
            console.log("Exitoso 🚀");
            response.status(200).json({rows});
        })
        .catch(err => {
            console.log(err);
            response.status(302).json({error: err});
        });
};

exports.postIncident = (request, response, next) => {
    const incidente = new Incident(request.body.created_at, request.body.lugares, request.body.tipos);
    incidente.save(request.body.lugar, request.body.tipo)
        .then(([rows, fieldData]) => {
            response.status(200).json({rows});
        })
        .catch(err => {
            console.log(err);
            response.status(302).json({error: err});
        });
};