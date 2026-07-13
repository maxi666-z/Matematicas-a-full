// =============================
// Pensando en π
// EES N°41 "Gustavo Cerati"
// =============================

// Pantalla de carga
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.display = "none";
    }, 2800);
});

// Botón comenzar
const comenzar = document.getElementById("comenzar");

comenzar.addEventListener("click", () => {

    document.getElementById("musica").scrollIntoView({

        behavior:"smooth"

    });

});

// =======================
// Juego
// =======================

function respuesta(valor){

    const resultado=document.getElementById("resultado");

    if(valor=="3.14"){

        resultado.innerHTML="🎉 ¡Correcto! π ≈ 3,14159";

        resultado.style.color="#6aff9b";

    }

    else{

        resultado.innerHTML="❌ Intenta nuevamente.";

        resultado.style.color="#ff7070";

    }

}

// =======================
// Animaciones al hacer scroll
// =======================

const tarjetas=document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

tarjetas.forEach((card)=>{

const posicion=card.getBoundingClientRect().top;

if(posicion<window.innerHeight-100){

card.style.opacity="1";

card.style.transform="translateY(0px)";

}

});

});

// Estado inicial

tarjetas.forEach((card)=>{

card.style.opacity="0";

card.style.transform="translateY(60px)";

card.style.transition=".8s";

});

// =======================
// Onda animada
// =======================

const onda=document.querySelector(".onda");

let mover=0;

setInterval(()=>{

mover++;

onda.style.backgroundPosition=mover+"px";

},20);

// =======================
// Cambiar color del menú
// =======================

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>50){

nav.style.background="#0d1036";

}else{

nav.style.background="rgba(8,8,30,.75)";

}

});
