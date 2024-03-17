import config from "../config/config.json";
var bcrypt = dcodeIO.bcrypt;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#form-register").addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(config.host);
    // Obtener los datos del formulario
    let contrasena;
    let contrasenaCifrada;
    const formData = new FormData(this);
    const datos_formulario = new FormData(e.target);
    //caso 1 para register
    datos_formulario.append("case", 1);
    datos_formulario.append("idCentro", 1);
    datos_formulario.append("idArea", 1);
    datos_formulario.append("idRol", 4);

    for (const [clave, valor] of datos_formulario.entries()) {
      if (clave == "documentoUsuario") {
        contrasena = valor;
        bcrypt.hash(contrasena, 10, function (err, hash) {
          if (err) {
            console.error("Error al cifrar la contraseña:", err);
          } else {
            console.log("Contraseña cifrada:", hash);
            contrasenaCifrada = hash;
            datos_formulario.append("password", contrasenaCifrada);
            // Aquí puedes guardar el hash en tu base de datos u otro almacenamiento seguro

            // Ahora que tenemos el hash, puedes enviar los datos del formulario al servidor o hacer cualquier otra acción que necesites.
          }
        });
      }
    }

    // for (const [clave, valor] of datos_formulario.entries()) {
    //   if (clave == "documentoUsuario") {
    //     contrasena = valor;
    //     cifrado(contrasena)    
    //     console.log(cifrado());  
    //     datos_formulario.append("password", cifrado());
    //   }
    // }

    // async function cifrado() { 
    //   return await bcrypt.hash(contrasena, 10,(err,hash)=>{
    //     if (!err) {
    //         return hash;
    //     }else{
    //         console.
    //     }
    //   });
    // }



    // cifrado(contrasena)
    //   .then((hashedPassword) => {
    //     console.log(`2222222222`);
    //     datos_formulario.append("password", hashedPassword);
    //     console.log("Hashed password:", hashedPassword);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });


      

      for (const [clave, valor] of datos_formulario.entries()) {
        console.log(``);
        console.log(`clave ${clave}`);      
        // console.log(`clave ${password}`);      
       
      }

    // console.log(contrasenaCifrada);
    // Configuración de la solicitud
    const requestOptions = {
      method: "POST",
      body: datos_formulario,
    };

    // URL del servicio
    const url = "webservice_registo.php";

    // Realizar la solicitud usando fetch

    fetch(`${config.host}/webservice_registo.php`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error en la solicitud ${response.status}`);
        }
      })
      .then((data) => {
        console.log("Respuesta del servidor:", data);
        // Maneja la respuesta del servidor según lo necesites
        document.getElementById("box-response").innerText = "Registro exitoso"; // Ejemplo de cómo manejar la respuesta
      })
      .catch((error) => {
        console.error("Error:", error);
        // Maneja los errores de la solicitud
        document.getElementById("box-response").innerText =
          "Error en el registro"; // Ejemplo de cómo manejar el error
      });

    // fetch(url, requestOptions)
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error( `Error en la solicitud ${response.status}`);
    //         }else{

    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log('Respuesta del servidor:', data);
    //         // Maneja la respuesta del servidor según lo necesites
    //         document.getElementById("box-response").innerText = "Registro exitoso"; // Ejemplo de cómo manejar la respuesta
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //         // Maneja los errores de la solicitud
    //         document.getElementById("box-response").innerText = "Error en el registro"; // Ejemplo de cómo manejar el error
    //     });
  });
});
