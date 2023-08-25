let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let stop = document.getElementById("stop");
let play = document.getElementById("play");
let restar = document.getElementById("restar");
let inputmin = document.getElementById("inputmin");
let inputseg = document.getElementById("inputseg");
let update = document.getElementById("update");
let alertred = document.querySelector(".alertred");
var audio = document.getElementById("audio");
// let replay = document.getElementById("replay");
let config = document.getElementById("config");
let main = document.getElementById("main");
// asginamos variables para establecer un tiempo determinado
let sec;
let min;
// integramos una variable en comun para detener y continuar
let inter;
let inter2;

// ocultamos el boton de restar, tambien el div#main
// restar.style.display = "none"
stop.style.display = "none"
main.style.display = "none"

// agregamos las funciones de play, stop y restar, agregamos update para actaulizar los minutos y los segundos
stop.addEventListener("click", stopchronometer);
play.addEventListener("click", playchronometer);
restar.addEventListener("click", restarchronometer)
update.addEventListener("click",updates);
audio.loop;

        



// se actualiza el tiempo designado
function updates(){
    let textmin = inputmin.value;
    let textsec = inputseg.value;
    
    console.log(`${textmin} Minutos Actualizados`)
    console.log(`${textsec} Segundos Actualizados`)
    
    min = textmin
    sec = textsec
    main.style.display = "flex"
    config.style.display = "none"
    
    parameters()
    
}

function parameters(){
    if(inputmin.value >= 60){
        console.log('Es mayor a 60')
        alert('El numero no debe ser ni superar los 60 minutos')
        restarchronometer()
    } else{
        console.log('El Digito Es Correcto')
    }
    if(inputseg.value >= 60){
        console.log('Es mayor a 60')
        alert('El numero no debe ser ni superar los 60 segundos')
        restarchronometer()
    } else{
        console.log('El Digito Es Correcto')
    }
}

// se implementa la funcion de restar que reinicia el contador
function restarchronometer(){
    console.log("se ejecuta restar")
    
    min = '--';
    sec = '--';
    config.style.display = "flex"
    main.style.display = "none"
    alertred.style.color = "#ffffff";
    inputmin.value = ''
    inputseg.value = ''
    audio.pause();
    
    stopchronometer()
    replay()
    // restar.style.display = "none"
}

function replay(){
    minutes.innerHTML = min
    seconds.innerHTML = sec
}

// empezamos la funcion del cronometro y escondemos el boton play
function playchronometer(){
    
    play.style.display = "none";
    stop.style.display = "inline";

    
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
        
        
        if(sec == ''){
            seconds.innerHTML = "0" + "0";
        }else if(sec < 10){
            seconds.innerHTML = "0" + sec;
        }else if(min < 1 && sec < 11){
            console.log('Alerta Roja')
            alertred.style.color = "#FF0000";   
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
        if(min == ''){
            minutes.innerHTML = "0" + "0";
        }else if(min < 10){
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
            restar.style.display = "inline"
            audio.play();
        }
        
        
    }, 1000);
    
}

// detenemos la funcion del cronometro y escondemos el boton stop
function stopchronometer(){

    stop.style.display = "none";
    play.style.display = "inline";

    clearInterval(inter);
    clearInterval(inter2);
    min = min
    sec = sec;
    console.log("se ejecuta stop");
}








