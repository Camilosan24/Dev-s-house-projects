export class Reproducir{
    constructor(teclas){
            this.teclas = teclas;
    }
    playSong(array,value){
        let song = array[value-1].url;
        const audio = new Audio(song);
        audio.volume = 0.4;
        audio.play();
    }

    sonidoTeclado(e){
        const idEvent = e.target.id;
        switch(e.keyCode)
        {
            case this.teclas.bombo:
                new Audio('./sounds/bombo.mp3').play();
                break;

            case this.teclas.caja:
                new Audio('./sounds/caja.mp3').play();
                break;

            case this.teclas.hit_hat:
                new Audio('./sounds/hit-hat.mp3').play();
                break;

            case this.teclas.platillo_Der:
                new Audio('./sounds/platillo-crash-derecho2.mp3').play();
                break;

            case this.teclas.platillo_Izq:
                new Audio('./sounds/platillo-crash-izquierdo.mp3').play();
                break;
            case this.teclas.platillo_ride:
                new Audio('./sounds/platillo-ride.mp3').play();
                break;

            case this.teclas.tom_aereo:
                new Audio('./sounds/tom-aereo.mp3').play();
                break;

            case this.teclas.tom_suelo:
                new Audio('./sounds/tom-suelo.mp3').play();
                break;
            //default:
            //break;
        }
    }
    sonidoMouse(idEvent){

        if(idEvent == "bambo"){
            new Audio('./sounds/bombo.mp3').play();
        }
        else if(idEvent == "platillo-crash-izquierdo"){
            new Audio('./sounds/platillo-crash-izquierdo.mp3').play();
        }
        else if(idEvent == "platillo-crash-derecho"){
            new Audio('./sounds/platillo-crash-derecho2.mp3').play();
        }
        else if(idEvent == "platillo-negro-izquierdo"){
            new Audio('./sounds/tom-aereo.mp3').play();
        }
        else if(idEvent == "platillo-crash-izquierdo-abajo"){
            new Audio('./sounds/hit-hat.mp3').play();
        }
        else if(idEvent == "tambor-centro" ){
            new Audio('./sounds/caja.mp3').play();
        }
        else if(idEvent == "tambor-derecho"){
            new Audio('./sounds/tom-suelo.mp3').play();
        }
        else if (idEvent == "platillo-crash-derecho-abajo"){
            new Audio('./sounds/platillo-crash-derecho2.mp3').play();
        }
    }
}