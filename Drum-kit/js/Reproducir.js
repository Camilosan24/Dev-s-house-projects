export class Reproducir{
    constructor(array,value){
        this.try = false;
        this.song = array[value-1].url;
        this.playing = new Audio(this.song);
    }

    playSong(){
        this.playing.play();
    }
}