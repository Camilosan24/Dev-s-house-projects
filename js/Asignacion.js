export class Asignacion{
    constructor(){
        this.teclas =
        {
            "bombo" : 66,
            "caja" : 67,
            "hit_hat" : 72,
            "platillo_Der" : 68,
            "platillo_Izq" : 73,
            "platillo_ride" : 82,
            "tom_aereo" : 65,
            "tom_suelo" : 83
        };

        this.datos =[
            "bombo",
            "caja",
            "hit_hat",
            "platillo_Der",
            "platillo_Izq",
            "platillo_ride",
            "tom_aereo",
            "tom_suelo"
        ];
    }

    sendInfo(){
        return this.teclas;
    }

    setTeclas(e){
        let datos=[];
        for (let i = 0; i < this.datos.length; i++) {
            let dato = this.teclas[this.datos[i]];
            datos.push(dato);
        }
        let index = datos.findIndex(e);
        console.log(index);

        switch(e.keyCode)
        {
            case this.teclas.bombo:
                this.teclas.bombo = e.keyCode;
                break;

            case this.teclas.caja:
                this.teclas.caja = e.keyCode;
                break;

            case this.teclas.hit_hat:
                this.teclas.hit_hat = e.keyCode;
                break;

            case this.teclas.platillo_Der:
                this.teclas.platillo_Der = e.keyCode;
                break;

            case this.teclas.platillo_Izq:
                this.teclas.platillo_Izq = e.keyCode;
                break;
            case this.teclas.platillo_ride:
                this.teclas.platillo_ride = e.keyCode;
                break;

            case this.teclas.tom_aereo:
                this.teclas.tom_aereo = e.keyCode;
                break;

            case this.teclas.tom_suelo:
                this.teclas.tom_suelo = e.keyCode;
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