// set timer variables
var sec = 0;
var min = 0;
var hou = 0;
var interval;
var state = false;

function adjustNumber(num) {
    if (num < 10) {
        return "0"+num;
    } else {
        return num;
    }
}

// function start timer
function start() {
    if (state == false) {
        counter();
        interval = setInterval(counter, 1000);
        state = true;
    }
}

// function pause timer
function pause() {
    clearInterval(interval);
    state = false;
}

// function stop timer
function stop() {
    clearInterval(interval);
    document.getElementById("watch").innerHTML = "00:00:00";
    sec = 0;
    min = 0;
    hou = 0;
    state = false;
}

function counter() {
    sec++;

    if (sec == 60) {
        min++;
        sec = 0;

        if (min == 60) {
            hou++;
            min = 0;
        }
    }

    document.getElementById("watch").innerHTML = adjustNumber(hou)+":"+adjustNumber(min)+":"+adjustNumber(sec);
}
