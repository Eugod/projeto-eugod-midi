const listaDeTeclas = document.querySelectorAll('.tecla');
const listaDeSons = document.getElementsByTagName('audio');

for(let i = 0; i < listaDeTeclas.length; i++) {
    let tecla = listaDeTeclas[i];
    let som = listaDeSons[i];

    tecla.addEventListener('click', () => {
        som.pause();

        som.currentTime = 0;
        
        som.play();
    });

    tecla.onkeydown = (e) => {
        if(e.keyCode == 13 || e.keyCode == 32){
            tecla.classList.add('ativa');
        }
    };

    tecla.onkeyup = () => tecla.classList.remove('ativa');
}
