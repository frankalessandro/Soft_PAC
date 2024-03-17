import config from "../config/config.json"

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#form-register').addEventListener("submit", (e) => {
        e.preventDefault();

        console.log(config.host)
        // Obtener los datos del formulario
        let contrasena
        const formData = new FormData(this);
        const datos_formulario = new FormData(e.target);
        //caso 1 para register
        datos_formulario.append('case', 1)
        // Convertir los datos del formulario a un objeto JSON
        const jsonData = {};
        for (const [clave, valor] of datos_formulario.entries()) {
            // console.log(`${clave}:${valor}`)
            if (clave === 'password') {
                contrasena = valor
            }
        }
    
    // Configuración de la solicitud
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(jsonData), // Convertir los datos a formato JSON
    };

    // URL del servicio
    const url = 'https://sweetmym.com//pacservices/webservice_registo.php';

    // Realizar la solicitud usando fetch
    fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data);
            // Maneja la respuesta del servidor según lo necesites
            document.getElementById("box-response").innerText = "Registro exitoso"; // Ejemplo de cómo manejar la respuesta
        })
        .catch(error => {
            console.error('Error:', error);
            // Maneja los errores de la solicitud
            document.getElementById("box-response").innerText = "Error en el registro"; // Ejemplo de cómo manejar el error
        });
    })
})
