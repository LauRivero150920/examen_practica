document.getElementById("enviar_ajax").onclick = () => {
    console.log("Se presionó el botón 😄");
    fetch('/park_incidents/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            lugar: document.getElementById("lugares").value,
            tipo: document.getElementById("tipos").value,
        }),   
        }).then(result => {
            return result.json(); //Regresa otra promesa
        }).then(data => {
            console.log("Se pudo insertar todo 😎");
            M.toast({
                html: 'Reporte Agregado con éxito 😄',
                classes: "teal darken-3"
            });
            fetch('/park_incidents/list', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }   
                }).then(result => {
                    return result.json(); //Regresa otra promesa
                }).then(data => {
                    datos = data.rows;
                    sum  = data.sum;
                    let tabla = "";
                    let alert_cont = "";
                    let sum_incidents = "";
                    sum_incidents += '<h6>Total incidentes: ' + sum + ' </h6>';
                    if(datos.length > 0){
                        for(let incidente of datos){
                            tabla += '<tr>';
                            tabla += '<td>' + incidente.created_at +'</td>';
                            tabla += '<td>' + incidente.nombre + '</td>';
                            tabla += '<td>' + incidente.descripcion + '</td>';
                            tabla +='</tr>';
                        }
                        //alert_cont += '<br><span>Información agregada con éxito 😄</span>'
                    }
                    else{
                        tabla += '<tr>';
                        tabla += '<td>--------</td>';
                        tabla += '<td>--------</td>';
                        tabla += '<td>--------</td>';
                        tabla +='</tr>';
                        tabla += '</tbody>';
                    }
                    document.getElementById("table_body").innerHTML = tabla;
                    document.getElementById("alert").innerHTML = alert_cont;
                    document.getElementById("sum_incidents_cont").innerHTML = sum_incidents;
                }).catch(err => {
                    console.log(err);
                });
        }).catch(err => {
            console.log(err);
    });
};

document.getElementById("mostrar_tabla").onclick = () => {
    console.log("Se presionó el botón 😄");
    fetch('/park_incidents/list', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }   
        }).then(result => {
            return result.json(); //Regresa otra promesa
        }).then(data => {
            datos = data.rows;
            sum = data.sum;
            let tabla = "";
            let sum_incidents = "";
            sum_incidents += '<h6>Total incidentes: ' + sum + '</h6>';
            if(datos.length > 0){
                for(let incidente of datos){
                    tabla += '<tr>';
                    tabla += '<td>' + new Date(incidente.created_at) +'</td>';
                    tabla += '<td>' + incidente.nombre + '</td>';
                    tabla += '<td>' + incidente.descripcion + '</td>';
                    tabla +='</tr>';
                }
            }
            else{
                tabla += '<tr>';
                tabla += '<td>--------</td>';
                tabla += '<td>--------</td>';
                tabla += '<td>--------</td>';
                tabla +='</tr>';
                tabla += '</tbody>';
            }
            document.getElementById("table_body").innerHTML = tabla;
            document.getElementById("sum_incidents_cont").innerHTML = sum_incidents;
        }).catch(err => {
            console.log(err);
        });
};