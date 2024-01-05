//Code > Function > variables > sets of variables are declared to assign them to functions that help with navigation.
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')

btn1.addEventListener('click', button1)
btn2.addEventListener('click', button2)
btn3.addEventListener('click', button3)


function button1(){
        btn1.className = "nav__btn nav__active"
        btn2.className = "nav__btn"
        btn3.className = "nav__btn"
        bodybox1()
}
function button2(){
        btn2.className = "nav__btn nav__active"
        btn1.className = "nav__btn"
        btn3.className = "nav__btn"
        bodybox2()
}
function button3(){
        btn3.className = "nav__btn nav__active"
        btn2.className = "nav__btn"
        btn1.className = "nav__btn"
        bodybox3()
}

function bodybox1(){
    box1.className = 'bodybox read'
    box2.className = 'bodybox'
    box3.className = 'bodybox'
}
function bodybox2(){
    box2.className = 'bodybox read'
    box1.className = 'bodybox'
    box3.className = 'bodybox'
}
function bodybox3(){
    box3.className = 'bodybox read'
    box2.className = 'bodybox'
    box1.className = 'bodybox'
}



//-----------------------------Code > encoding segment for the clock
//function > declare variables for seconds, minutes and hours, displays the declared variables on the screen, a setTimeout is declared to update every 500 milliseconds.
function starTime(){
    //declaration of the variables and creation of the 'new Date'
    let nowyear = document.getElementById('year')
    let clock = document.getElementById('time')
    let nowday = document.getElementById('days')
    let nowdate = new Date();

    let sec = nowdate.getSeconds();
    let min = nowdate.getMinutes();
    let hrs = nowdate.getHours();

    sec = zero(sec);
    min = zero(min);

    let year = nowdate.getFullYear();
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'Juli', 'August', 'September', 'Octuber', 'November', 'December'];
    let month = months[nowdate.getMonth()];

    let days = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday'];
    let day = days[nowdate.getDay()]

    nowyear.innerHTML = `${year}, ${month}`
    clock.innerHTML = `${hrs}:${min}:${sec}`;
    nowday.innerHTML = `${day}`

    setTimeout(function(){starTime()}, 500);
    
    //function > declare zero() to add a leading zero to numbers less than 10.
    function zero(i){
        if(i < 10){
            i = "0" + i;
        }
        return i;
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function chronometer(){

    const btnplay = document.getElementById('bodychro__play')
    const btnstop = document.getElementById('bodychro__stop')
    const btnrestart = document.getElementById('bodychro__restart')
    let interval;
    let hms = document.getElementById('bodychro__hms')
    let seg = 0
    let min = 0
    let hour = 0
    
    btnplay.addEventListener("click",play)
    btnstop.addEventListener("click",stop)
    btnrestart.addEventListener("click",restart)
    
    
    function play(){
        if(!interval){
            
            
            
            interval = setInterval(time, 1000)
            
            function time(){
                let segaux
                let minaux
                let houraux
                
                seg++
                if(seg>59){min++;seg=0}
                if(min>59){hour++;min=0}
                if(hour>24){hour=0}
                
                if(seg < 10){segaux = "0" + seg}else{segaux = seg}
                if(min < 10){minaux = "0" + min}else{minaux = min}
                if(hour < 10){houraux = "0" + hour}else{houraux = hour}
                
                
                hms.innerHTML = `${houraux}:${minaux}:${segaux}`
            }
            
            btnplay.disabled = true
            btnstop.disabled = false
        }
        
    }
    
    function stop(){
        clearInterval(interval)
        interval = null
        
        btnstop.disabled = true
        btnplay.disabled = false
    }
    
    function restart(){
        clearInterval(interval)
        interval = null
        
        seg = 0
        min = 0
        hour = 0
        
        hms.innerHTML = "00:00:00"
        
        btnstop.disabled = false
        btnplay.disabled = false
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function timer(){

    let hmstime = document.getElementById("hmstime");
    let stop = document.getElementById("bodytimer__stop");
    let play = document.getElementById("bodytimer__start");
    let restar = document.getElementById("bodyrimer__restart");
    
    let hms = hmstime.value

    let hours = hms.split(':')[0]
    let minutes = hms.split(':')[1]
    let seconds = hms.split(':')[2] 



    console.log(hms)
    console.log(hours+' horas')
    console.log(minutes+' minutos')
    console.log(seconds+' segundos')

    play.addEventListener('click',playtimer);

    function playtimer(){
        hms = hmstime.value
        
        let hours = hms.split(':')[0]
        let minutes = hms.split(':')[1]
        let seconds = hms.split(':')[2] 
        let intervaltimer = setInterval(timetimer, 1000);

        
        function timetimer(){
            let secaux
            let minaux
            let houraux

            seconds--

            
            if(seconds <= 9 || >= 1 ){secaux = '0' + seconds}else{secaux = seconds}
            if(minutes <= 9){minaux = '0' + minutes}else{minaux = minutes}
            if(hours <= 9){houraux = '0' + hours}else{houraux = hours}

            if(seconds < '00'){minutes--; seconds='59'}
            // if(minutes < '00'){hours--; minutes='59'}
            
            
            hmstime.value = [`${houraux}:${minaux}:${secaux}`];
            
            hms = hmstime.value
            
            console.log(hms)
            console.log(hours+' horas')
            console.log(minutes+' minutos')
            console.log(seconds+' segundos')

            if(hmstime.value=='00:00:00'){clearInterval(intervaltimer)}
        }



        }


}

    
