
function desplegarMenus() {
    const botones = [...document.querySelectorAll('.botones')]
    
    iniciar();

    function iniciar() {
        botones.forEach((boton, index) =>  {
            boton.addEventListener('click', (event) => agregarTexto(event, index));
        })
    }
}

function agregarTexto(event, index) {
    let contenedorTexto = document.getElementById('contenedor-texto')
    let botonPulsado = event.target;
    let valorBoton = event.target.value;
    let texto = 'clickeado'
    let texto2 = 'Segundo boton clickeado'
    let texto3 = 'Tercer boton clickeado'
    console.log(valorBoton)
    
    if (botonPulsado && valorBoton==='Inicio') {
        contenedorTexto.innerHTML = texto;
    }
    if(botonPulsado && valorBoton === 'Servicios'){
        contenedorTexto.innerHTML = texto2;
    }
    if(botonPulsado && valorBoton === 'Contacto'){
        contenedorTexto.innerHTML = texto3;
    }



}