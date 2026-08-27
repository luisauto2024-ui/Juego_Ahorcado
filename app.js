const musica = document.querySelector('.musica')

musica.volume = 0.001
musica.loop = false

document.addEventListener('click', () =>{
    musica.play()
}, {once: true})

window.addEventListener('beforeunload', () => {
    musica.pause()
    musica.currentTime=0
})

let arregloEspacios = [];

const palabra = document.getElementById('palabra')
const boton = document.querySelector(".btnIngresarPalabra")
const adivPalabra = document.querySelector(".palabraAdivinar")

boton.addEventListener('click',()=>{
    arregloEspacios=[]
    let letras = palabra.value
    let letrasPalabra = letras.split("")
    letrasPalabra.map((letra)=>{
        arregloEspacios.push("_")
    })
    adivPalabra.innerHTML = `<p><strong>${arregloEspacios.join(" ")}</strong></p>` 
});

