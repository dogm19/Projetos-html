const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


const pulo = () =>{

    mario.classList.add('pulo');

    setTimeout(() => {

        mario.classList.remove('pulo');

    },500);
}

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');

    if ( pipePosition <= 125 && pipePosition > 0 && marioPosition < 80){
//animação do tubo(colisão) game over!
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
//o objeto para a onde é pego
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
//troca de imagens para determinada ação
        mario.src = 'image/game-over.png';
        mario.style.width = '75px';
        mario.style.margin = '50px';
//resetando o game
        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', pulo);
