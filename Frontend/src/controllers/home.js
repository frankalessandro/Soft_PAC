const contenedor = document.querySelector('.contenedor');
import '../Styles/tarjeta.css'
import { tarjeta } from '../components/tarjeta';


fetch('https://rickandmortyapi.com/api')
    .then(response => response.json())
    .then(response => {
        console.log(response)
        for (let index = 0; index < 2 - 1; index++) {
            contenedor.innerHTML += ` ${tarjeta('de cara', 'de espalda')}
`
        }
    });
