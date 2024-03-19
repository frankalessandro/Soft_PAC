import config from "../../config/config.json"
const filaProyecto = document.querySelector('#ProyectosRow')
const HeaderModal = document.querySelector('#HeaderModal')
const BodyModal = document.querySelector('#BodyModal')


// hacer peticion al servicio
//https://sweetmym.com/pacservices/webservice_consultas.php?case=2&idRol=1&idArea=1
fetch(`${config.host}//webservice_consultas.php?case=2&idRol=1&idArea=1`, {
    method: 'GET',

})
    .then(respuesta => respuesta.json())
    .then(respuestaJson => {
        console.log(respuestaJson);
        if (respuestaJson.rpta) {
            respuestaJson.rpta.forEach(usuario => {
                console.log(usuario)
                
                filaProyecto.innerHTML += `
                <td class="px-6 py-4">
                        ${usuario.idProyecto}
                        </td>    
                <th scope="row" class="flex justify-start pl-24 gap-2 text-left px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18 17h-.09c.058-.33.088-.665.09-1v-1h1a1 1 0 0 0 0-2h-1.09a5.97 5.97 0 0 0-.26-1H17a2 2 0 0 0 2-2V8a1 1 0 1 0-2 0v2h-.54a6.239 6.239 0 0 0-.46-.46V8a3.963 3.963 0 0 0-.986-2.6l.693-.693A1 1 0 0 0 16 4V3a1 1 0 1 0-2 0v.586l-.661.661a3.753 3.753 0 0 0-2.678 0L10 3.586V3a1 1 0 1 0-2 0v1a1 1 0 0 0 .293.707l.693.693A3.963 3.963 0 0 0 8 8v1.54a6.239 6.239 0 0 0-.46.46H7V8a1 1 0 0 0-2 0v2a2 2 0 0 0 2 2h-.65a5.97 5.97 0 0 0-.26 1H5a1 1 0 0 0 0 2h1v1a6 6 0 0 0 .09 1H6a2 2 0 0 0-2 2v2a1 1 0 1 0 2 0v-2h.812A6.012 6.012 0 0 0 11 21.907V12a1 1 0 0 1 2 0v9.907A6.011 6.011 0 0 0 17.188 19H18v2a1 1 0 0 0 2 0v-2a2 2 0 0 0-2-2Zm-4-8.65a5.922 5.922 0 0 0-.941-.251l-.111-.017a5.52 5.52 0 0 0-1.9 0l-.111.017A5.925 5.925 0 0 0 10 8.35V8a2 2 0 1 1 4 0v.35Z"/>
                        </svg>
                        <div class="ps-3">
                            <div class="text-base font-semibold text-color-base">${usuario.nombre}</div>
                            <div class="font-normal text-gray-500">${usuario.correo}</div>
                        </div>  
                    </th>
                        <td class="px-6 py-4">
                        ${usuario.nproyecto}
                        </td>
                        <td class="px-6 py-4">
                        ${usuario.personasImpactadas}
                        </td>
                        <td class="px-6 py-4">
                        ${usuario.empresa}
                        </td>
                        <td class="px-6 py-4">
                        ${usuario.estado}
                        </td>
                        <td class="px-6 py-4">
                            <!-- Modal toggle -->
                            <button data-modal-target="static-modal" data-modal-toggle="static-modal" class="flex-row justify-center text-white cursor-pointer bg-moreDarkGreen hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-[#09E85E]/50 font-medium rounded-full px-2.5 py-2.5 text-center inline-flex items-center mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100">
                                <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clip-rule="evenodd"/>
                                </svg> 
                            </button>
                        </td>
                    </tr>
                    `
            });
            // Limpiar el contenido actual del HeaderModal
            // Limpiar el contenido actual del HeaderModal
            // Limpiar el contenido actual del HeaderModal
            HeaderModal.innerHTML = "";
            
            // Agregar un evento click a todos los botones que activan el modal
            document.querySelectorAll('[data-modal-toggle="static-modal"]').forEach(button => {
                button.addEventListener('click', function () {
                    // Obtener el ID del proyecto asociado al botón presionado
                    const idProyecto = this.closest('tr').querySelector('.px-6.py-4:first-child').textContent.trim();

                    // Buscar el proyecto con el ID correspondiente en respuestaJson.rpta
                    const proyectoDeseado = respuestaJson.rpta.find(usuario => usuario.idProyecto === idProyecto);
                    console.log(proyectoDeseado)
                    // Verificar si se encontró el proyecto deseado y agregar su título al HeaderModal
                    if (proyectoDeseado) {
                        
                        HeaderModal.innerHTML = `
                        <span class="text-xl font-semibold text-gray-900 dark:text-white">
                            Nombre: ${proyectoDeseado.nproyecto} 
                        </span>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                             </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
            `;
                        BodyModal.innerHTML = `
                        <div class="">
                            <span class="font-semibold">Objetivo:</span>
                            <p class="text-gray-600"> ${proyectoDeseado.objetivo} </p>
                         </div>
                        <div class="">
                            <span class="font-semibold">Descripción:</span>
                            <p class="text-gray-600"> ${proyectoDeseado.descripcion}</p>
                        </div>
                        <div class="flex w-full gap-8">
                        <div class="">
                        <span class="font-semibold">Personas Impactadas:</span>
                            <p class="text-gray-600">${proyectoDeseado.personasImpactadas}</p>
                        </div>
                        <div class="">
                            <span class="font-semibold">Área:</span>
                            <p class="text-gray-600">${proyectoDeseado.area}</p>
                        </div>
                    </div>
                    <div class="flex items-center mt-4">
                        <svg class="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                        </svg>
                        <div class="pl-5">
                            <div class=""><span>Postulante: ${proyectoDeseado.nombre}</span></div>
                            <div class=""><span>Correo: ${proyectoDeseado.correo}</span></div>
                            <div class=""><span>Telefono: ${proyectoDeseado.telefono}</span></div>
                        </div>
                    </div>
            `;
                    } else {
                        // Si el proyecto deseado no se encontró, mostrar un mensaje de error
                        HeaderModal.innerHTML = `
                <span class="text-xl font-semibold text-red-600 dark:text-red-400">
                    No se encontró el proyecto con el ID especificado.
                </span>
            `;
                    }
                });
            });



        }
    })
    .catch(error => {
        console.log(error);
    });




// Obtener referencias a los botones
const btnAceptar = document.getElementById("btnAceptar");
const btnRechazar = document.getElementById("btnRechazar");

// Agregar evento click al botón "Aceptar"
btnAceptar.addEventListener("click", () => {
    enviarSolicitudPost("aceptar");
});

// Agregar evento click al botón "Rechazar"
btnRechazar.addEventListener("click", () => {
    enviarSolicitudPost("rechazar");
});

// Función para enviar la solicitud POST con confirmación
function enviarSolicitudPost(decision) {
    // Preguntar al usuario si está seguro de realizar la acción
    if (confirm(`¿Estás seguro de ${decision === "aceptar" ? "aceptar" : "rechazar"} la solicitud?`)) {
        // Realizar la solicitud POST
        fetch(`${config.host}/webservice_registo.php`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                case: 5  // Agregar el parámetro adicional "case" con el valor 5
            })
        })
        .then(response => {
            // Manejar la respuesta de la solicitud POST
            console.log("Solicitud POST realizada con éxito.");
            // Aquí puedes realizar cualquier acción adicional después de la solicitud POST
        })
        .catch(error => {
            // Manejar cualquier error que ocurra durante la solicitud POST
            console.error("Error al realizar la solicitud POST:", error);
        });
    } else {
        // Si el usuario cancela la acción, mostrar un mensaje de cancelación
        alert("La acción ha sido cancelada.");
    }
}









