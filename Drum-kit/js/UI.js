export class UI {
    constructor(){
        this.div = document.getElementById('card-reproductor');
    }
    render(){
        const url = 'http://127.0.0.1:5500/cancion.json';

        let datos =  [];
        fetch(url).then(res => res.json())
        .then(res=>{
            res.forEach(el => {
                let newDiv = document.createElement('div');
                newDiv.innerHTML=`  <div class="song">
                                        <div class="name-song">${el.name}</div>
                                            <a href="#" name="${parseInt(el.value)}">
                                                <img src="../images/icon1.png" class="icon" alt="icon" width="40" height="40"></img>
                                            </a>
                                            <button class="cuadrado" name="stop"></button>
                                        </div>
                                    </div>`;
                this.div.appendChild(newDiv);
                datos.push(el);
            });
        })
        return datos;
    }
}
