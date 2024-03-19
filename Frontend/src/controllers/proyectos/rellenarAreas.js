import config from "../../config/config.json";
const select_area = document.querySelector("#select-area");

// hacer peticion para traer las areas de la db
fetch(`${config.host}/webservice_consultas.php?case=4`)
  .then((respuesta) => respuesta.json())
  .then((areas) => {
    // console.log(areas.rpta);
    const listaSectores = areas.rpta;
    listaSectores.forEach((sector) => {
      select_area.innerHTML += `
      <option value="${sector.id}">${sector.area}</option>
      `;
    });
  });
