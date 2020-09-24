import { UI } from './UI.js';
import { Reproducir } from './Reproducir.js';
import { Asignacion } from './Asignacion.js';
const asignacion = new Asignacion();
const ui = new UI();
const reproductor = document.getElementById('card-reproductor');
const DrumSounds = document.getElementById('#Drum-Kit');
const configKey = document.getElementById('config-key');
const datos = ui.render();
ui.renderArrows(asignacion);
const reproducir = new Reproducir(asignacion.sendInfo());

reproductor.addEventListener('click',(e)=>{
    let value = e.target;
    if(value.name === 'stop'){
        location.reload();
    }else{
        reproducir.playSong(datos,parseInt(value.parentElement.name));
        e.preventDefault();
    }
})

DrumSounds.addEventListener('mousedown',(e)=>{
    const idEvent = e.target.id;
    reproducir.sonidoMouse(idEvent);
})

document.addEventListener('keydown', (e)=>{
    reproducir.sonidoTeclado(e);
})
var isEdited = false;
configKey.addEventListener('click',(e)=>{
    let keyChar = e.target.parentElement.parentElement.children[2];
    keyChar.innerHTML="Press key";
    isEdited = true;

})


addEventListener('keyup',(e)=>{
    if(isEdited){
        let keyChar = e.target.parentElement.parentElement.children[2];
        let keyCode = e.keyCode;
        keyChar.innerHTML = `${String.fromCharCode(keyCode)}`;
        asignacion.setTeclas(keyCode);
        isEdited = false;
    }
})









