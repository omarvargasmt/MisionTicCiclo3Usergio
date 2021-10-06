async function invocarws() {
    const respuesta = await fetch("https://gf255a7993b1618-bdclientes.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/clientes/clientes");
    const datos = respuesta.json();

    return datos;
}

function mostrardatos(datos) {
    let mensaje=document.getElementById("mensaje");

    //Longitud del arreglo
    const longitud = datos.items.length;
    
    var tabla = "<table border='1'>" + 
                "<tr>" +
                    "<th>id</th>" +
                    "<th>name</th>" +
                    "<th>brand</th>" + 
                    "<th>model</th>" + 
                    "<th>category_id</th>" + 
                "</tr>";
                
    
    for (var i=0; i < longitud; i++) {
        tabla = tabla + "<tr>"+
                        "<td>" + datos.items[i].id + "</td>" + 
                        "<td>" + datos.items[i].name + "</td>" + 
                        "<td>" + datos.items[i].brand  + "</td>" + 
                        "<td>" + datos.items[i].model  + "</td>" +
                        "<td>" + datos.items[i].category_id + "</td>" +
                        "</tr>";
    }

    tabla = tabla  + "</table>";
    mensaje.innerHTML = tabla;
}