var ms = 00;
var sec = 00;
var min = 00;
var msHeading = document.getElementById("ms");
var secHeading = document.getElementById("sec");
var minHeading = document.getElementById("min");

function time(){
    ms++
    msHeading.innerHTML = ms;
    if(ms >= 100){
        sec++
        secHeading.innerHTML = sec;
        ms = 00
    }
    else if(sec >= 60){
        min++
        minHeading.innerHTML = min;
        sec = 00
    }
}
function start(){
    interval = setInterval(time, 10);

}

function stop(){
    clearInterval(interval)
    var btn = document.getElementById('start');
    btn.disabled = false;
}

function reset(){
    ms = '00';
    sec = '00';
    min = '00';
    msHeading.innerHTML = ms;
    secHeading.innerHTML = sec;
    minHeading.innerHTML = min;
    clearInterval(interval)
    btn = document.getElementById('start');
    btn.disabled = false;
}


