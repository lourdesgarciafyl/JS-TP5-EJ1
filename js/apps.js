let numMagico
let btnComenzar = document.getElementById(`btnComenzar`)
 /* let adivinador = document.querySelector(`form`)
let divParaAlert = document.getElementById(`divParaAlert`) */

function comenzarJuego(){
        btnComenzar.innerHTML = `Estás jugando`;
        btnComenzar.className = `btn btnRosaDisabled`;
        btnComenzar.disabled = true;

        let numAleatorio = Math.round(Math.random() * (100 - 1) + 1);
        numMagico = numAleatorio
        console.log(`Te tocó el número: ${numMagico}`);
        
        let formJuego = document.getElementById(`formJuego`)
        formJuego.reset();
    }


   function adivinandoNumero(e){
    e.preventDefault();
    console.log(`Estoy en la funcion del formulario`);
    let input = document.querySelector('input').value;
    console.log(input);
    let msjAlert = document.getElementById(`divParaAlert`);
    
    if(input >= 1 && input <= 100){
        if(input == numMagico){
            msjAlert.innerHTML = `Ganaste!`
            msjAlert.className = `alert alertRosa`
            console.log(msjAlert)
            btnComenzar.innerHTML = `Jugar de nuevo!`;
            btnComenzar.className = `btn btnRosa`
            btnComenzar.disabled = false;
        } else if(input < numMagico){
                msjAlert.innerHTML = `Volvé a intentarlo!
                PISTA: el número mágico es más alto que ${input}!`
                msjAlert.className = `alert alertSeguiParticipando`
                console.log(msjAlert)
            } else if(input > numMagico){
                msjAlert.innerHTML=`Volvé a intentarlo!
                PISTA: el número mágico es más bajo que ${input}!`
                msjAlert.className = `alert alertSeguiParticipando`
                console.log(msjAlert)
            }    
    } else{
        msjAlert.innerHTML=`Recordá que tenes que elegir un numero entre el 1 y el 10.`
        msjAlert.className = `alert alertSeguiParticipando`
    }
    }