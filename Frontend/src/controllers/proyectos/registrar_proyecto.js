import config from "../../config/config.json";
const usuario = JSON.parse(localStorage.getItem("user"));

document
  .querySelector("#register-project-form")
  .addEventListener("submit", (e) => {
    e.preventDefault();

    const datos_registro_proyecto = new FormData(e.target);
    datos_registro_proyecto.append("case", 3);
    datos_registro_proyecto.append("idUsuario", usuario.id);

    fetch(`${config.host}/webservice_registo.php`, {
      method: "post",
      body: datos_registro_proyecto,
    })
      .then((respuesta) => respuesta.json())
      .then((r) => {
        console.log(r);
      })
      .catch((error) => {
        console.log(error);
      });
  });
