let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let stop = document.getElementById("stop");
let play = document.getElementById("play");
let restar = document.getElementById("restar");

// asginamos variables para establecer un tiempo determinado
// WARNING - codificar inserciones de variables por el usuario
let sec = 0;
let min = 5;

// integramos una variable en comun para detener y continuar
let inter;
let inter2;

// ocultamos el boton de restar
restar.style.display = "none"
stop.style.display = "none"

// agregamos las funciones de play, stop y restar
stop.addEventListener("click", stopchronometer);
play.addEventListener("click", playchronometer);
restar.addEventListener("click", restarchronometer)

// se implementa la funcion de restar que reinicia el contador
function restarchronometer(){
    min = 5;
    sec = 0;
    playchronometer()
    restar.style.display = "none"
    console.log("se ejecuta restar")
}




// empezamos la funcion del cronometro y escondemos el boton play
function playchronometer(){
    
    play.style.display = "none";
    stop.style.display = "block";
    
    if(min > -1){
        segundos()
        minutos()
        console.log("se ejecuta play")
        
    }
}
function segundos(){
    inter = setInterval(() => {
        // mostramos los segundos en pantalla(document) e indicamos el reinicio de los segundos
        seconds.innerHTML = sec;
        if(sec < 10){
            seconds.innerHTML = "0" + sec;
        }
        if(sec == 0){
            sec = 59;
        
        }else{
            sec--;
            console.log("se ejecuta seconds");
        }
    }, 1000);
}
        // mostramos los minutos en pantalla(document) e indicamos la finalizacion del programa
function minutos(){
    inter2 = setInterval(() => {
        minutes.innerHTML = min;
        if(min < 10){
            minutes.innerHTML = "0" + min;
        }
        if(sec == 59){
            min--;
            console.log("se ejecuta minutes")
        }else if(min <= -1 && sec <= 59){
            stopchronometer()
            console.log("finaliza");
            seconds.innerHTML = "00";
            minutes.innerHTML = "00";
            play.style.display = "none";
            restar.style.display = "block"
        }
    }, 1000);
    
}

// detenemos la funcion del cronometro y escondemos el boton stop
function stopchronometer(){

    stop.style.display = "none";
    play.style.display = "block";

    clearInterval(inter);
    clearInterval(inter2);
    min = min
    sec = sec;
    console.log("se ejecuta stop");
}







