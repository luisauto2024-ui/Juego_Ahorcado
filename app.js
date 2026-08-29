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

let letrasPalabra 
let arregloEspacios = [];

const palabra = document.getElementById('palabra')
const boton = document.querySelector(".btnIngresarPalabra")
const adivPalabra = document.querySelector(".palabraAdivinar")
const inputletraAdiv = document.getElementById('letra')
const botonSelecLetra = document.querySelector(".btnIngresarletra")
const botonReiniciar = document.querySelector('.btnReiniciar')

let vidas = 0

boton.addEventListener('click',()=>{
    arregloEspacios=[]
    let letras = palabra.value.toLowerCase()
    letrasPalabra = letras.split("")
    letrasPalabra.map((letra)=>{
        arregloEspacios.push("_")
    })
    adivPalabra.innerHTML = `<p><strong>${arregloEspacios.join(" ")}</strong></p>` 

});

botonSelecLetra.addEventListener('click',()=>{
    let letra = inputletraAdiv.value.toLowerCase()
    let cont = 0;
    for (const valor of letrasPalabra) {
        
        if(valor === letra){
            arregloEspacios[cont]=letra
        } cont++
    }
    adivPalabra.innerHTML = `<p><strong>${arregloEspacios.join(" ")}</strong></p>` 
    inputletraAdiv.value = ''
    
})

botonReiniciar.addEventListener('click', () => {
    arregloEspacios = []
    adivPalabra.innerHTML = ''
    letra.value = ''
    palabra.value = ''

})

