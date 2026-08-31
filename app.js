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
const etiquetaIntento = document.getElementById('intento')

let vidas = ''

function quitarVida(vidas){
    let vida = parseInt(vidas)
    vida=vida-1;
    return `${vida}`;
}

boton.addEventListener('click',()=>{
    let letras = palabra.value.toLowerCase();

    if(letras.length < 1){
        alert("Debe introducir una palabra, para jugar")
        return
    }
    arregloEspacios=[]
    letrasPalabra = letras.split("");
    letrasPalabra.map((letra)=>{
    arregloEspacios.push("_")
    })
    
    adivPalabra.innerHTML = `<p><strong>${arregloEspacios.join(" ")}</strong></p>`
    boton.id = 'btn-palabra'
    palabra.setAttribute('readonly', true)

});


botonSelecLetra.addEventListener('click',()=>{
    let letra = inputletraAdiv.value.toLowerCase()
    let cont = 0;
    let acumulado=0;
    
    if(letra.length<1){
        alert("Debe introducir una letra")
        return
    } else{
        for (const valor of letrasPalabra) {
            if(valor === letra){
                arregloEspacios[cont]=letra
            }else{
                acumulado++
            } 
            cont++    
        }
        if(acumulado===letrasPalabra.length){
        
            if(etiquetaIntento.textContent > 1){
                vidas = etiquetaIntento.textContent
                let reducir = quitarVida(vidas);
                etiquetaIntento.textContent = reducir;
            }else{
                vidas = etiquetaIntento.textContent
                let reducir = quitarVida(vidas);
                etiquetaIntento.textContent = reducir;
                vidas = etiquetaIntento.textContent    
            }
            
        }
        if(vidas === '0'){
            adivPalabra.innerHTML = `<p><strong>PERDISTE!! LA PALABRA ERA: 
            ${letrasPalabra.join(" ")}</strong></p>`
            botonSelecLetra.id = 'btn-letra'
            inputletraAdiv.setAttribute('readonly',true)
        }else{
            adivPalabra.innerHTML = `<p><strong>${arregloEspacios.join(" ")}</strong></p>` 
            inputletraAdiv.value = ''
            //console.log(letrasPalabra.join(" "))
            }
        }
       
})

botonReiniciar.addEventListener('click', () => {
    arregloEspacios = []
    adivPalabra.innerHTML = ''
    letra.value = ''
    palabra.value = ''
    botonSelecLetra.id =''
    boton.id = ''
    palabra.removeAttribute('readonly')
    inputletraAdiv.removeAttribute('readonly')
   // etiquetaIntento.textContent = 5

})

