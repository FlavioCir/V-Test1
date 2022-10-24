var day = new Date();
var n = day.getMonth();

const mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giungo', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

document.getElementById('dataOggi').innerHTML = `${day.getDate()} / ${mesi[n]} / ${day.getFullYear()}`;

document.getElementById('date').innerHTML += day;

document.getElementById('day').innerHTML += day.getDate();

document.getElementById('month').innerHTML += mesi[n];

document.getElementById('dataDiOggi').innerHTML = `${day.getDate()} / ${day.getMonth() + 1} / ${day.getFullYear()}`;

setInterval(myTimer, 1000);

function myTimer() {
    const date = new Date();
    if (day.getHours() >= 5 && day.getHours() <= 11) {
    document.getElementById('secondi').innerHTML = date.toLocaleTimeString() + " Buongiorno! 🥱";
    }
    else if (day.getHours() >= 12 && day.getHours() <= 17){
        document.getElementById('secondi').innerHTML = date.toLocaleTimeString() + " Buon pomeriggio! 😎";
    }
    else if (day.getHours() >= 18 && day.getHours() <= 22) {
        document.getElementById('secondi').innerHTML = date.toLocaleTimeString() + " Buona sera! 🙂";
    }
    else if (day.getHours() >= 23 && day.getHours() <= 2) {
        document.getElementById('secondi').innerHTML = date.toLocaleTimeString() + " Buona notte! 😴";
    }
    else {
        document.getElementById('secondi').innerHTML = date.toLocaleTimeString() + " Torna a letto! 😴";
    }
}