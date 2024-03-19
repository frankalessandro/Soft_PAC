import config from "../../config/config.json";
document.addEventListener('DOMContentLoaded', () => {
  const opciones = document.querySelectorAll('.opciones');
  const vistas = document.querySelectorAll('.vistas');

  opciones.forEach(opcion => {
    opcion.addEventListener('click', () => {
      const dataVista = opcion.getAttribute('data-vista');
      // console.log(dataVista);

      // Ocultar todas las vistas
      vistas.forEach(vista => {
        vista.style.display = 'none';
      });

      // Mostrar solo la vista correspondiente al data-vista de la opción seleccionada
      const vistaMostrar = document.querySelector(`.${dataVista}`);
      if (vistaMostrar) {
        vistaMostrar.style.display = 'block';
      }
    });
  });

  let u = JSON.parse(localStorage.getItem("user"));
  let idUser = u.id;
  let idArea = u.idArea;
  let idRol = u.idRol;

  fetch(
    `${config.host}//webservice_consultas.php?case=2&idRol=${idRol}&idArea=${idArea}&idUsuario=${idUser}`
  )
    .then((respuestaProyectos) => respuestaProyectos.json())
    .then((misproyectos) => {
      console.log(misproyectos.rpta[0])
      document.querySelector('#count-my-proyects-dashboard').textContent = misproyectos.rpta.length;

      // Obtener la referencia del cuerpo de la tabla
      const tbody = document.querySelector("tbody");

      // Limpiar el cuerpo de la tabla
      tbody.innerHTML = "";


      // Recorrer los proyectos y agregar una fila para cada uno
      misproyectos.rpta.forEach((proyecto) => {
       
        // Verificar si el proyecto está definido y tiene la propiedad nproyecto
        if (proyecto && proyecto.nproyecto) {
          // Construir la fila de la tabla
          const rowHTML = `
                <tr class="w-full bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4 pl-20 text-left">${proyecto.nproyecto}</td>
                    <td class="px-6 py-4 ">${proyecto.personasImpactadas}</td>
                    <td class="px-6 py-4 text-left">${proyecto.area}</td>
                    <td class="px-6 py-4">
                        <div class="flex items-center h-full w-full justify-center">
                            <div class="h-2.5 w-2.5 rounded-full ${getColorStatus(proyecto.idEstado)} me-2"></div>
                            ${proyecto.estado}
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        <button data-proyecto-id="${proyecto.idProyecto}" class="details-my-projects flex-row justify-center text-white cursor-pointer bg-moreDarkGreen hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-[#09E85E]/50 font-medium rounded-full px-2.5 py-2.5 text-center inline-flex items-center mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100">
                            <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </td>
                </tr>
            `;
          // Agregar la fila al cuerpo de la tabla
          tbody.innerHTML += rowHTML;
        }
      });

      // Mostrar modal al hacer clic en el botón "Details" de cada proyecto
      document.querySelectorAll('.details-my-projects').forEach(button => {
        button.addEventListener('click', () => {
          const projectId = button.getAttribute('data-proyecto-id');
          // Actualizar el título y la descripción del modal
          const proyecto = misproyectos.rpta.find(p => p.idProyecto === projectId);
          if (proyecto) {
            document.getElementById('title-my-project').textContent = proyecto.nproyecto;
            // document.getElementById('centro-my-project').textContent = proyecto.centro;
            document.getElementById('empresa-my-project').textContent = proyecto.empresa;
            document.getElementById('aim-my-project').textContent = proyecto.objetivo;
            document.getElementById('description-my-project').textContent = proyecto.descripcion;
            //info personal
            // idEstado
            document.getElementById('my-name-description').textContent = proyecto.nombre;
            document.getElementById('my-email-description').textContent = proyecto.correo;
            document.getElementById('my-phone-description').textContent = proyecto.telefono;


            // container-status-project
            document.getElementById('container-status-project').innerHTML = `
            <div class="flex items-end h-full w-full justify-end">
                        <div class="h-2.5 w-2.5 rounded-full ${getColorStatus(proyecto.idEstado)} me-2"></div>
                        <div class="h-2.5 flex items-center me-2" id="status-my-proyect">Estado</div>
                      </div>
            `

            document.getElementById('description-modal-my-projects').classList.remove('hidden');
            document.getElementById('description-modal-my-projects').classList.add('flex');
          } else {
            console.log("No se encontró el proyecto con ID:", projectId);
          }
        });
      });

      // Cerrar el modal al hacer clic en el botón de cerrar
      document.getElementById('button-close-description-modal').addEventListener('click', () => {
        document.getElementById('description-modal-my-projects').classList.add('hidden');
        document.getElementById('description-modal-my-projects').classList.remove('flex');
      });
    });


    const getColorStatus = (status) => {
      const coloresEstado = ['bg-green-500', 'bg-gray-500', 'bg-yellow-500']
      let colorChoose
      switch (status) {
        case '3'://enviado
          colorChoose = coloresEstado[1]
          break;
        case '7'://asignado
          colorChoose = coloresEstado[2]
          break;
        case '6'://aceptado
          colorChoose = coloresEstado[0]
          break;
      }
      console.log(colorChoose)
      return colorChoose
    }

});

