//toto by sa malo starat o to ze ten js pocka az na nacita stranka
document.addEventListener('DOMContentLoaded', () => {

    // zacne tu value na pocitatle
    let count = 0;
    // vdaka tomu ze pridat id ti to ukazuje to cislo
    const counterDisplay = document.getElementById('number');
    // variable aby sme mali intervalID
    let intervalId;

    // funkcia ktore updatne obrazovku
    const updateDisplay = () => {
        // chapem to tak ze vdaka tomuto tam sedi to co sa ukazuje na obrazovke
        counterDisplay.textContent = count;
    };

    // funkcia ktora ti zacne pocitanie
    const startCounting = () => {
        // nastavy to interval vdaka ktoremu sa zmeni cislo na obrazovke
        intervalId = setInterval(() => {
            count++;
        
            updateDisplay();
        }, 800); // 1000 milliseconds = 1 second
    };

    // to ze zacne automaticky po spusteny
    startCounting();
});
