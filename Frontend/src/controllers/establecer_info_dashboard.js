
let usuario = JSON.parse(localStorage.getItem('user'))
console.log(usuario)
const name = document.querySelector('#name-user-box').textContent = usuario.nombre
const email = document.querySelector('#email-user-box').textContent = usuario.correo

