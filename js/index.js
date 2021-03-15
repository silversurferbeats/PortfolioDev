var player = document.getElementById('player');
var content = document.getElementById('content');
var isFullscreen = false;
player.addEventListener('mouseover', sumarCapas);

var puntos = 0;
var tiempo = 60;
var necesarios = 30;
var maxContent = 3;

function sumarCapas(){

    if(isFullscreen) {
        return;
    }

    isFullscreen = true;
    randNum = Math.round(Math.random() * window.innerHeight);
    randNum2 = Math.round(Math.random() * window.innerWidth);
    player.style.top = randNum + 'px';
    player.style.left = randNum2 + 'px';
    player.classList.add('full');
    content.classList.add('show');


    var placas = document.querySelectorAll('.container-content');
    maxContent = placas.length - 2;
    placas.forEach((item) => {
        item.classList.remove('show');
    });


    var placaActual;

    if( puntos >= maxContent ) {
        placaActual = maxContent;
    } else {
        placaActual = puntos;
    }


    document.querySelector('.container-content[data-order="' + (puntos >= maxContent ? maxContent : puntos) + '"]').classList.add('show');


    setTimeout(() => {
        player.classList.remove('full');
        content.classList.remove('show');
        setTimeout(() => {
            isFullscreen = false;
        }, 500);
    }, 5000);


    puntos++;

    /**boton back */

    

    back.addEventListener('click', e => {
        placas.length - 1;
    })

    
}

setInterval (restarTiempo, 1000);

/***************************************************************************** */



/**vanilla.js (no esta funcionando // movimiento rotacion de cartas) */
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1,

});


