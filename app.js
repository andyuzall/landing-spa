
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
    let texto = '<h2>Seccion de inicio</h2><p>Bienvenido a nuestra sección de Inicio</p>'
    let texto2 = '<h2>Seccion de Servicios</h2><p>Bienvenido a nuestra sección de servicios</p>'
    let texto3 = '<h2>Seccion de Contacto</h2><p>Bienvenido a nuestra sección de Contacto</p>'
    
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