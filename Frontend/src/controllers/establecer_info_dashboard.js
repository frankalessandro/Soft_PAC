let usuario = JSON.parse(localStorage.getItem("user"));
console.log(usuario);

var rol=usuario.idRol == "1"
? "Super-Admin"
: usuario.idRol == "2"
? "Admin-area"
: "Cliente";

const name = (document.querySelector("#name-user-box").textContent =
  usuario.nombre+' - '+rol);




const email = (document.querySelector("#email-user-box").textContent =
  usuario.correo);
