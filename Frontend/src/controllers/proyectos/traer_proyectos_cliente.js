import config from "../../config/config.json";
let u = JSON.parse(localStorage.getItem("user"));
let idUser = u.id;
let idArea = u.idArea;
let idRol = u.idRol;

fetch(
  `${config.host}//webservice_consultas.php?case=2&idRol=${idRol}&idArea=${idArea}&idUsuario=${idUser}`
)
  .then((respuestaProyectos) => respuestaProyectos.json())
  .then((misproyectos) => {
    console.log(misproyectos);

    // Obtener la referencia del cuerpo de la tabla
    const tbody = document.querySelector("tbody");

    // Limpiar el cuerpo de la tabla
    tbody.innerHTML = "";

    // Recorrer los proyectos y agregar una fila para cada uno
    misproyectos.rpta.forEach((proyecto) => {
      // Crear una fila
      const row = document.createElement("tr");
      row.classList.add(
        "w-full",
        "bg-white",
        "border-b",
        "dark:bg-gray-800",
        "dark:border-gray-700",
        "hover:bg-gray-50",
        "dark:hover:bg-gray-600"
      );

      // Añadir las celdas con los datos del proyecto
      const postulanteCell = document.createElement("td");
      postulanteCell.classList.add(
        "px-6",
        "py-4",
        "text-gray-900",
        "whitespace-nowrap",
        "dark:text-white"
      );
      postulanteCell.textContent = proyecto.nombre; // Reemplazar 'nombre' por el campo adecuado
      row.appendChild(postulanteCell);

      const nombreProyectoCell = document.createElement("td");
      nombreProyectoCell.classList.add("px-6", "py-4");
      nombreProyectoCell.textContent = proyecto.nproyecto; // Reemplazar 'nproyecto' por el campo adecuado
      row.appendChild(nombreProyectoCell);

      const personasImpactoCell = document.createElement("td");
      personasImpactoCell.classList.add("px-6", "py-4");
      personasImpactoCell.textContent = proyecto.personas_impacto; // Reemplazar 'personas_impacto' por el campo adecuado
      row.appendChild(personasImpactoCell);

      const empresaCell = document.createElement("td");
      empresaCell.classList.add("px-6", "py-4");
      empresaCell.textContent = proyecto.empresa; // Reemplazar 'empresa' por el campo adecuado
      row.appendChild(empresaCell);

      const estadoCell = document.createElement("td");
      estadoCell.classList.add("px-6", "py-4");
      estadoCell.textContent = proyecto.estado; // Reemplazar 'estado' por el campo adecuado
      row.appendChild(estadoCell);

      const detalleCell = document.createElement("td");
      detalleCell.classList.add("px-6", "py-4");

      const button = document.createElement("button");
      button.setAttribute("data-modal-target", "static-modal");
      button.setAttribute("data-modal-toggle", "static-modal");
      button.classList.add(
        "flex-row",
        "justify-center",
        "text-white",
        "cursor-pointer",
        "bg-moreDarkGreen",
        "hover:bg-green-400",
        "focus:ring-4",
        "focus:outline-none",
        "focus:ring-[#09E85E]/50",
        "font-medium",
        "rounded-full",
        "px-2.5",
        "py-2.5",
        "text-center",
        "inline-flex",
        "items-center",
        "mr-2",
        "mb-2",
        "hover:shadow-lg",
        "transition-all",
        "duration-200",
        "ease-in-out",
        "hover:scale-110",
        "scale-90",
        "gap-x-2",
        "opacity-90",
        "hover:opacity-100"
      );
      button.innerHTML = `
          <svg
            class="w-6 h-6 text-white dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        `;
      detalleCell.appendChild(button);
      row.appendChild(detalleCell);

      // Agregar la fila al cuerpo de la tabla
      tbody.appendChild(row);
    });
  });
