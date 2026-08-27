const musica = document.querySelector('.musica')

musica.volume = 0.1
musica.loop = true

document.addEventListener('click', () =>{
    musica.play()
}, {once: true})

window.addEventListener('beforeunload', () => {
    musica.pause()
    musica.currentTime=0
})