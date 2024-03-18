import Usuarios from "../../components/Views/Usuarios.astro";
import config from "../../config/config.json"
const title = document.querySelector('#column-client-table')
const row = document.querySelector('#row-client-table')

document.addEventListener('DOMContentLoaded', () => {
    //column-client-table


    // hacer peticion al servicio}
    fetch(`${config.host}/webservice_consultas.php?case=3`, {
        method: 'GET',

    })
        .then(respuesta => respuesta.json())
        .then(respuestaJson => {
            console.log(respuestaJson);
            if (respuestaJson.rpta) {

                let columnas = Object.keys(respuestaJson.rpta[0])
                console.log(columnas)


                // agregando  etiquetas de columnas a tabla
                columnas.forEach(columna => {
                    if (columna == 'id' || columna == 'nombre' || columna == 'telefono' || columna == 'correo' || columna == 'empresa' || columna == 'centro' || columna == 'area' ) {
                        title.innerHTML += `                
                        <th scope="col" class="px-6 py-3">
                        ${columna}
                        </th>   
                        `
                    }                 
                });

                for (let index = 0; index < respuestaJson.rpta.length; index++) {
                    
                    
                }

                respuestaJson.rpta.forEach(usuario => {
                    console.log(usuario)
                    row.innerHTML += ` 
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">
                    ${usuario.id}
                    </td>
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ${usuario.nombre}
                     </th>

                   
                    <td class="px-6 py-4">
                    ${usuario.telefono}
                    </td>
                    <td class="px-6 py-4">
                    ${usuario.correo}
                    </td>
                    <td class="px-6 py-4">
                    ${usuario.empresa}
                    </td>
                   
                    <td class="px-6 py-4">
                    ${usuario.centro}
                    </td>
                    <td class="px-6 py-4">
                    ${usuario.area}
                    </td>
                 
                    </tr>

                    `

                });

            } else {
                setMessage(boxResponse, 'text-red-700', 'este correo no existe 🚩');
            }
        })
        .catch(error => {
            console.log(error);
        });










})