console.log('activo');

document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos(){
    // console.log('funcion activada');

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'catalogo.json', true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            // console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            // console.log(datos);
            let res = document.querySelector('#res');
            res.innerHTML = '';

            for(let catalogo of datos){
                // console.log(catalogo.artista);
                res.innerHTML += `
                <tr>
                    <td>${catalogo.titulo}</td>
                    <td>${catalogo.artista}</td>
                </tr>
                `
            }
        }
    }
    
}

