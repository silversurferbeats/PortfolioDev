var player = document.getElementById('player');
var content = document.getElementById('content');
var dismiss;
var back = document.querySelectorAll('.atras'); 

back.forEach(function(item) {
    item.addEventListener('click', () => {
        sumarCapas(true);    
    });
});



var isFullscreen = false;
player.addEventListener('mouseover', function(event) {
    sumarCapas();
});

var puntos = 0;
var tiempo = 60;
var maxContent = 3;

function sumarCapas(restar){

    if(isFullscreen && !restar) {
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
    maxContent = placas.length - 1;
    placas.forEach((item) => {
        item.classList.remove('show');
    });

    document.querySelector('.container-content[data-order="' + (puntos >= maxContent ? maxContent : puntos) + '"]').classList.add('show');


    if(!restar) {
        dismiss = setTimeout(() => {
            player.classList.remove('full');
            content.classList.remove('show');
            setTimeout(() => {
                isFullscreen = false;
            }, 500);
        }, 5000);
    }


    if(restar) {
        clearTimeout(dismiss);
        player.classList.remove('full');
        content.classList.remove('show');
        isFullscreen = true;
        setTimeout(() => {
            isFullscreen = false;
        }, 500);    
        puntos = puntos - 2;
    } else {
        if( puntos >= maxContent ) {
            puntos = maxContent;
        } else {
            puntos++;
        }
    }

}


/*************************** */



/**vanilla.js (no esta funcionando // movimiento rotacion de cartas) */
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1,

});