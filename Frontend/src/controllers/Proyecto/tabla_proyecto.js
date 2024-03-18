import config from "../../config/config.json"
const fila = document.querySelector('#row')

document.addEventListener('DOMContentLoaded', () => {

    // hacer peticion al servicio}
    //https://sweetmym.com/pacservices/webservice_consultas.php?case=2&idRol=4&idArea=1&idUsuario=6
    fetch(`${config.host}/webservice_consultas.php?case=2&idRol=4&idArea=1&idUsuario=6`, {
        method: 'GET',

    })
    // <th scope="col" class="px-6 py-3">
    //                         Postulante
    //                     </th>
    //                     <th scope="col" class="px-6 py-3">
    //                         Nombre del proyecto
    //                     </th>
    //                     <th scope="col" class="px-6 py-3">
    //                         Personas de impacto
    //                     </th>
    //                     <th scope="col" class="px-6 py-3">
    //                         Empresa
    //                     </th>
    //                     <th scope="col" class="px-6 py-3">
    //                         Estado
    //                     </th>
    //                     <th scope="col" class="px-6 py-3">
    //                         Detalle
    //                     </th> 
        .then(respuesta => respuesta.json())
        .then(respuestaJson => {
            console.log(respuestaJson);
            if (respuestaJson.rpta) {
                respuestaJson.rpta.forEach(usuario => {
                    console.log(usuario)
                    fila.innerHTML += `
                    <th scope="row" class="flex items-center justify-center gap-2 text-left px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 17h-.09c.058-.33.088-.665.09-1v-1h1a1 1 0 0 0 0-2h-1.09a5.97 5.97 0 0 0-.26-1H17a2 2 0 0 0 2-2V8a1 1 0 1 0-2 0v2h-.54a6.239 6.239 0 0 0-.46-.46V8a3.963 3.963 0 0 0-.986-2.6l.693-.693A1 1 0 0 0 16 4V3a1 1 0 1 0-2 0v.586l-.661.661a3.753 3.753 0 0 0-2.678 0L10 3.586V3a1 1 0 1 0-2 0v1a1 1 0 0 0 .293.707l.693.693A3.963 3.963 0 0 0 8 8v1.54a6.239 6.239 0 0 0-.46.46H7V8a1 1 0 0 0-2 0v2a2 2 0 0 0 2 2h-.65a5.97 5.97 0 0 0-.26 1H5a1 1 0 0 0 0 2h1v1a6 6 0 0 0 .09 1H6a2 2 0 0 0-2 2v2a1 1 0 1 0 2 0v-2h.812A6.012 6.012 0 0 0 11 21.907V12a1 1 0 0 1 2 0v9.907A6.011 6.011 0 0 0 17.188 19H18v2a1 1 0 0 0 2 0v-2a2 2 0 0 0-2-2Zm-4-8.65a5.922 5.922 0 0 0-.941-.251l-.111-.017a5.52 5.52 0 0 0-1.9 0l-.111.017A5.925 5.925 0 0 0 10 8.35V8a2 2 0 1 1 4 0v.35Z"/>
                    </svg>

                    <div class="ps-3">
                        <div class="text-base font-semibold text-darkGreen">Neil Sims</div>
                        <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                    </div>  
                </th>
                <td class="px-6 py-4">
                    text example
                </td>
                <td class="px-6 py-4">
                    text example
                </td>
                <td class="px-6 py-4">
                    text example
                </td>
                <td class="px-6 py-4">
                    text example
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
            }
        })
        .catch(error => {
            console.log(error);
        });










})