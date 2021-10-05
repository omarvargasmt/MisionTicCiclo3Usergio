function loadDoc() {
    //1. defino el objeto XMLHttpRequest
    const xhttp = new XMLHttpRequest();

    //4. Cuando el servidor responde la petición, se ejecuta el evento y la funcion
    xhttp.onload = function () {  
        
        //Longitud del arreglo
        const datos = JSON.parse(this.responseText);
        const longitud = datos.items.length;

        var tabla = "<table border='1'" +
            "<tr>"+
            "<th>id</th>" +
            "<th>name</th>" +
            "<th>brand</th>" +
            "<th>model</th>" +
            "<th>category_id</th>" +
            "</tr>"

        for (var i =0; i < longitud; i++) {
            tabla = tabla + "<tr>"+
            "<th>" + datos.items[i].id + "</th>" +
            "<th>" + datos.items[i].name + "</th>" +
            "<th>" + datos.items[i].brand + "</th>" +
            "<th>" + datos.items[i].model + "</th>" +
            "<th>" + datos.items[i].category_id + "</th>" +
            "</tr>";
        }

        tabla = tabla + "</table>"

        console.log(tabla);

        document.getElementById("demo").innerHTML = tabla;
    }
    //2. Definir la petición
    xhttp.open("GET","https://gf255a7993b1618-bdclientes.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/clientes/clientes")
    //3. Enviar la petición
    xhttp.send();
}