document.addEventListener('DOMContentLoaded', () =>{
    const btn_close_session = document.querySelector('#btn-close-sesion')
    btn_close_session.addEventListener('click', () =>{
        localStorage.clear()
        location.href = '/'
    })
})