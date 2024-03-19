import config from "../config/config.json";

var bcrypt = dcodeIO.bcrypt;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#form-register").addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(config.host);

    // Obtener los datos del formulario
    const datos_formulario = new FormData(e.target);
    //caso 1 para register
    datos_formulario.append("case", 1);
    datos_formulario.append("idCentro", 1);
    datos_formulario.append("idArea", 1);
    datos_formulario.append("idRol", 4);

    // Obtener la contraseña del formulario
    const contrasena = datos_formulario.get("documentoUsuario");

    // Cifrar la contraseña
    bcrypt.hash(contrasena, 10, function (err, hash) {
      if (err) {
        console.error("Error al cifrar la contraseña:", err);
      } else {
        console.log("Contraseña cifrada:", hash);
        // Agregar la contraseña cifrada al FormData
        datos_formulario.set("password", hash);

        // Configuración de la solicitud
        const requestOptions = {
          method: "POST",
          body: datos_formulario,
        };

        // URL del servicio
        const url = `${config.host}/webservice_registo.php`;

        // Realizar la solicitud usando fetch
        fetch(url, requestOptions)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Error en la solicitud ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            console.log("Respuesta del servidor:", data);
            // Maneja la respuesta del servidor según lo necesites
            document.getElementById("box-response").innerText =
              "Registro exitoso"; // Ejemplo de cómo manejar la respuesta
          })
          .catch((error) => {
            console.error("Error:", error);
            // Maneja los errores de la solicitud
            document.getElementById("box-response").innerText =
              "Error en el registro"; // Ejemplo de cómo manejar el error
          });
      }
    });
  });
});
