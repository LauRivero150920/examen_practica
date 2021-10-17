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
            fetch('/park_incidents/list', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }   
                }).then(result => {
                    return result.json(); //Regresa otra promesa
                }).then(data => {
                    data = data.rows;
                    let tabla = "";
                    let alert_cont = ""
                    if(data.length > 0){
                        tabla += '<tbody>';
                        for(let incidente of data){
                            tabla += '<tr>';
                            tabla += '<td>' + incidente.created_at +'</td>';
                            tabla += '<td>' + incidente.nombre + '</td>';
                            tabla += '<td>' + incidente.descripcion + '</td>';
                            tabla +='</tr>';
                        }
                        tabla += '</tbody>';
                        alert_cont += '<br><span>Información agregada con éxito 😄</span>'
                    }
                    else{
                        tabla += '<tr>';
                        tabla += '<td>--------</td>';
                        tabla += '<td>--------</td>';
                        tabla += '<td>--------</td>';
                        tabla +='</tr>';
                        tabla += '</tbody>';
                    }
                    document.getElementById("lista_incidentes").innerHTML = tabla;
                    document.getElementById("alert").innerHTML = alert_cont;
                }).catch(err => {
                    console.log(err);
                });
        }).catch(err => {
            console.log(err);
    });
};