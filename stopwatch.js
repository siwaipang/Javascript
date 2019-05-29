let ms=0;
let sec=0;
let min=0;
let h=0;
let run;

function start(){
    ms = ms + 10;
    if (ms > 1000){
        ms = 0;
        sec++;
    }
    if (sec > 60) {
        sec = 0;
        min++;
    }
    if (min > 60){
        min = 0;
        h++;
    }

    document.getElementById("ms").innerHTML= ms;
    document.getElementById("sec").innerHTML= sec;
    document.getElementById("min").innerHTML= min;
    document.getElementById("h").innerHTML= h;

    run = setTimeout(start, 10)
}

function stop(){
    clearTimeout(run);
    document.getElementById('reset'.style.display = 'inline-block');
}
function reset(){
    ms=0;
    sec=0;
    min=0;
    h=0;

    document.getElementById("ms").innerHTML= ms;
    document.getElementById("sec").innerHTML= sec;
    document.getElementById("min").innerHTML= min;
    document.getElementById("h").innerHTML= h;
}