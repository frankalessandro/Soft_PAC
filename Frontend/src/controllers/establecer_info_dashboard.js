let usuario = JSON.parse(localStorage.getItem("user"));
const rol = usuario.idRol;

let rol_ =usuario.idRol == "1"
? "Super-Admin"
: usuario.idRol == "2"
? "Admin-area"
: "Cliente";

const name = (document.querySelector("#name-user-box").textContent =
  usuario.nombre + " - " + rol_);

const email = (document.querySelector("#email-user-box").textContent =
  usuario.correo);

document.addEventListener("DOMContentLoaded", () => {
  const opciones = document.querySelectorAll(".opciones");

  opciones.forEach((opcion) => {
    opcion.addEventListener("click", () => {
      const dataVista = opcion.getAttribute("data-vista");

      // Ocultar todas las vistas
      const vistas = document.querySelectorAll(".vistas");
      vistas.forEach((vista) => {
        vista.style.display = "none";
      });

      // Mostrar solo la vista correspondiente al data-vista de la opción seleccionada
      const vistaMostrar = document.querySelector(`.${dataVista}`);
      if (vistaMostrar) {
        vistaMostrar.style.display = "block";
      }
    });
  });
});

const idRol = document.querySelector(".idRol");
if (usuario.idRol == 1 || usuario.idRol == 2) {
  idRol.innerHTML = `
   <li class="opciones" data-vista="proyectos">
      <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-color-base-hover dark:hover:bg-gray-700 group">
       <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M12 3a1 1 0 0 1 .78.375l4 5a1 1 0 1 1-1.56 1.25L13 6.85V14a1 1 0 1 1-2 0V6.85L8.78 9.626a1 1 0 1 1-1.56-1.25l4-5A1 1 0 0 1 12 3ZM9 14v-1H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4v1a3 3 0 1 1-6 0Zm8 2a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clip-rule="evenodd"/>
        </svg>                
         <span class="flex-1 ms-3 whitespace-nowrap">Proyectos</span>
         <span id="count-all-projects" class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-color-base rounded-full dark:bg-blue-900 dark:text-blue-300">0</span>
      </a>
   </li>
   <li class="opciones" data-vista="usuarios">   
      <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-color-base-hover dark:hover:bg-gray-700 group">
       <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M4 4a2 2 0 1 0 0 4h16a2 2 0 1 0 0-4H4Zm0 6h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Zm10.707 5.707a1 1 0 0 0-1.414-1.414l-.293.293V12a1 1 0 1 0-2 0v2.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2Z" clip-rule="evenodd"/>
        </svg>                
         <span class="flex-1 ms-3 whitespace-nowrap">Usuarios</span>
         <span id="count-my-proyects1" class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-color-base rounded-full dark:bg-blue-900 dark:text-blue-300">0</span>
      </a>
   </li>
   <li class="opciones" data-vista="clientes">   
      <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-color-base-hover dark:hover:bg-gray-700 group">
       <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M4 4a2 2 0 1 0 0 4h16a2 2 0 1 0 0-4H4Zm0 6h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Zm10.707 5.707a1 1 0 0 0-1.414-1.414l-.293.293V12a1 1 0 1 0-2 0v2.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2Z" clip-rule="evenodd"/>
        </svg>                
         <span class="flex-1 ms-3 whitespace-nowrap">Clientes</span>
         <span id="count-my-proyects" class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-color-base rounded-full dark:bg-blue-900 dark:text-blue-300">0</span>
      </a>
   </li>`;
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
                 <span id="count-my-proyects-dashboard" class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-color-base rounded-full dark:bg-blue-900 dark:text-blue-300">0</span>
              </a>
           </li>`;
}
