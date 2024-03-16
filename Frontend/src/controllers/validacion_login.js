import config from "../config/config.json"

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#form-login').addEventListener("submit", (e) => {
        e.preventDefault();

        console.log(config.host)

        //obtener datos con target
        let contrasena
        let boxResponse = document.querySelector('#box-response')
        const datos_formulario = new FormData(e.target);
        //caso 2 para login
        datos_formulario.append('case', 2)
        for (const [clave, valor] of datos_formulario.entries()) {
            // console.log(`${clave}:${valor}`)
            if (clave === 'password') {
                contrasena = valor
            }
        }

        // hacer peticion al servicio
        fetch(`${config.host}/webservice_registo.php`, {
            method: 'POST',
            body: datos_formulario
        })
            .then(respuesta => respuesta.json())//promesa, espera respuesta y se convierte ne notacion de objetos
            .then(respuestaJson => {
                // console.log(`contrasena cliente : ${contrasena}`)
                if (respuestaJson.rpta) {
                    console.log(respuestaJson.rpta)
                    if (contrasena === respuestaJson.rpta[0].contrasena && respuestaJson.rpta[0].rp === 'si') {
                        localStorage.setItem('email', respuestaJson.rpta[0].correo)
                        localStorage.setItem('user', JSON.stringify(respuestaJson.rpta[0]))
                        console.log(localStorage.getItem('user'))
                        console.log(`email en localstorage: ${localStorage.getItem('email')}`)
                        setMessage(boxResponse, 'text-lime-700', 'ha ingresado exitosamente 🌱')
                        location.href = '/dashboard'
                    } else {
                        setMessage(boxResponse, 'text-red-700', 'credenciales incorrectas 🚩')
                    }
                } else {
                    setMessage(boxResponse, 'text-red-700', 'este correo no existe 🚩')
                }
            })
            .catch(error => {
                console.log(error)
            })
    })
})

//funcion para determinar color de texto y mensaje 
const setMessage = (elemento, color, mensaje) => {
    elemento.classList.add(color)
    elemento.textContent = mensaje
    setTimeout(() => {
        elemento.classList.remove(color)
        elemento.textContent = ''
    }, 1000);
}