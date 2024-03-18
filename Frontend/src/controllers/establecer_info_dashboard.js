let usuario = JSON.parse(localStorage.getItem("user"));
console.log(usuario);
const rol = usuario.idRol

const name = (document.querySelector("#name-user-box").textContent =
  usuario.nombre + ' - ' + rol);

const email = (document.querySelector("#email-user-box").textContent =
  usuario.correo);

  document.addEventListener('DOMContentLoaded', () => {
    const opciones = document.querySelectorAll('.opciones');

    opciones.forEach(opcion => {
        opcion.addEventListener('click', () => {
            const dataVista = opcion.getAttribute('data-vista');
            console.log(dataVista);

            // Ocultar todas las vistas
            const vistas = document.querySelectorAll('.vistas');
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
});


const idRol = document.querySelector('.idRol')
if (usuario.idRol == 1 || usuario.idRol == 2) {
  idRol.innerHTML = `
      <li class="opciones" data-vista="dashboard">
        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-color-base-hover  dark:hover:bg-color-base group">
          <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
              <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
              <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
          </svg>
          <span class="ms-3">Dashboard</span>
        </a>
      </li>
   <li class="opciones" data-vista="proyectos">
      <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-color-base-hover dark:hover:bg-gray-700 group">
       <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M12 3a1 1 0 0 1 .78.375l4 5a1 1 0 1 1-1.56 1.25L13 6.85V14a1 1 0 1 1-2 0V6.85L8.78 9.626a1 1 0 1 1-1.56-1.25l4-5A1 1 0 0 1 12 3ZM9 14v-1H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4v1a3 3 0 1 1-6 0Zm8 2a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clip-rule="evenodd"/>
        </svg>                
         <span class="flex-1 ms-3 whitespace-nowrap">Proyectos</span>
      </a>
   </li>
   <li class="opciones" data-vista="usuarios">   
      <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-color-base-hover dark:hover:bg-gray-700 group">
       <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M4 4a2 2 0 1 0 0 4h16a2 2 0 1 0 0-4H4Zm0 6h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Zm10.707 5.707a1 1 0 0 0-1.414-1.414l-.293.293V12a1 1 0 1 0-2 0v2.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2Z" clip-rule="evenodd"/>
        </svg>                
         <span class="flex-1 ms-3 whitespace-nowrap">Usuarios</span>
         <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-color-base rounded-full dark:bg-blue-900 dark:text-blue-300">0</span>
      </a>
   </li>
   <li class="opciones" data-vista="clientes">   
      <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-color-base-hover dark:hover:bg-gray-700 group">
       <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M4 4a2 2 0 1 0 0 4h16a2 2 0 1 0 0-4H4Zm0 6h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Zm10.707 5.707a1 1 0 0 0-1.414-1.414l-.293.293V12a1 1 0 1 0-2 0v2.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2Z" clip-rule="evenodd"/>
        </svg>                
         <span class="flex-1 ms-3 whitespace-nowrap">Clientes</span>
         <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-color-base rounded-full dark:bg-blue-900 dark:text-blue-300">0</span>
      </a>
   </li>`
} else {
  idRol.innerHTML = `
           <li  class="opciones" data-vista="crear_proyecto">
              <a href="#" class=" flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-color-base-hover dark:hover:bg-gray-700 group">
               <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 3a1 1 0 0 1 .78.375l4 5a1 1 0 1 1-1.56 1.25L13 6.85V14a1 1 0 1 1-2 0V6.85L8.78 9.626a1 1 0 1 1-1.56-1.25l4-5A1 1 0 0 1 12 3ZM9 14v-1H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4v1a3 3 0 1 1-6 0Zm8 2a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clip-rule="evenodd"/>
                </svg>                
                 <span class="flex-1 ms-3 whitespace-nowrap">Crear Proyecto</span>
              </a>
           </li>
           <li class="opciones" data-vista="mis_proyectos">   
              <a href="#" class=" flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-color-base-hover dark:hover:bg-gray-700 group">
               <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 1 0 0 4h16a2 2 0 1 0 0-4H4Zm0 6h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Zm10.707 5.707a1 1 0 0 0-1.414-1.414l-.293.293V12a1 1 0 1 0-2 0v2.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2Z" clip-rule="evenodd"/>
                </svg>                
                 <span class="flex-1 ms-3 whitespace-nowrap">Mis proyectos</span>
                 <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-color-base rounded-full dark:bg-blue-900 dark:text-blue-300">0</span>
              </a>
           </li>`
}


