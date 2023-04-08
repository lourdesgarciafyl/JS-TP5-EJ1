let btnComenzar = document.getElementById(`btnComenzar`)
let adivinador = document.querySelector(`form`)
btnComenzar.addEventListener(`click`, comenzarJuego);


function comenzarJuego(){
    console.log(`Estoy apretando el boton comenzar`);
    let contenedorJuego = document.getElementById(`contenedorJuego`)
    console.log(contenedorJuego)
    if(btnComenzar.innerHTML === `Comenzar a jugar!`){
        btnComenzar.innerHTML = `Empezar de nuevo`;
        btnComenzar.className = `btn btn-danger`;
        let numAleatorio = Math.round(Math.random() * (10 - 1) + 1);
        console.log(`Te tocó el número: ${numAleatorio}`);
        
        adivinador.addEventListener(`submit`, adivinandoNumero)
        function adivinandoNumero(e){
            e.preventDefault();
            console.log(`Estoy en la funcion del formulario`);
            let input = document.querySelector('input').value;
            console.log(input);
            if(input >= 1 && input <= 10){
                if(input == numAleatorio){
                    alert(`Ganaste!`)
                    adivinador.reset();
                    btnComenzar.innerHTML = `Comenzar a jugar!`;
                    btnComenzar.className = `btn btn-primary`;
                } else{
                    if(input < numAleatorio){
                        alert(`PISTA: el número mágico es más alto!`)
                        adivinador.reset();
                    } else if(input > numAleatorio){
                        alert(`PISTA: el número mágico es más bajo!`)
                        adivinador.reset();
                    }
                }
            } else{
                alert(`Ingresa un numero entre el 1 y el 10, no mayor.`)
            }
        }

    } else{
        adivinador.reset();
        btnComenzar.innerHTML = `Comenzar a jugar!`;
        btnComenzar.className = `btn btn-primary`;
    }
}
