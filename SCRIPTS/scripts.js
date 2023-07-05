let a = false;

function buy(btn){
    if(!a){
        document.getElementById(btn).style.background = 'gray';
        document.getElementById(btn).innerHTML = 'В корзине';
        a = true;
    }
    else{
        document.getElementById(btn).style.background = 'ghostwhite';
        document.getElementById(btn).innerHTML = 'Купить';
        a = false;
    }
}
function plusZero(number){
    if(number < 10){
        return "0" + number;
    }
    else{
        return number;
    }
}
function currentTime(){
    let date = new Date();
    let hour = plusZero(date.getHours());
    let min = plusZero(date.getMinutes());
    let sec = plusZero(date.getSeconds());
    document.getElementById("time").innerText = hour + ":" + min + ":" + sec;
    setTimeout(currentTime, 1000);
 }
currentTime()
