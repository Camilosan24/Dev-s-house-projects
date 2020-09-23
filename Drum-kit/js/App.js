import { UI } from './UI.js';
import { Reproducir } from './Reproducir.js';
const ui = new UI();
const reproductor = document.getElementById('card-reproductor');
const datos = ui.render();


reproductor.addEventListener('click',(e)=>{
    let value = e.target;
    if(value.name === 'stop'){
        location.reload();
    }else{
        const reproducir = new Reproducir(datos,parseInt(value.parentElement.name));
        reproducir.playSong();
    }



})








