export const validarSesion = (item, ruta) => {
    if (!localStorage.getItem(item)) {
        location.href = ruta
    }
}

export const validarSesionLogin = (item, ruta) => {
    if (localStorage.getItem(item)) {
        location.href = ruta
    }
}