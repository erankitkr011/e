const time = document.getElementById("time");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");


start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
reset.addEventListener("click", resetTimer);

let timer;
let running = false;
let completed = 0;

function updateTimer() {
    completed = completed + 1;
    let hour = Math.floor(completed / 3600);  //60 / 3600
    let minute = Math.floor((completed % 3600) / 60);  // 61 % 3600 = 61 
    let sec = completed % 60;

    time.innerText = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function startTimer() {
    if (!running) {
        timer = setInterval(updateTimer, 1000);
        running = true;
    }
}

function pauseTimer(){
    clearInterval(timer);
    running = false;
}

function resetTimer(){
    clearInterval(timer);
    running = false;
    completed = 0;
    time.innerText = "00:00:00"
}